import './App.css'
import {useChromeStorage} from "./hooks/useChromeStorage.ts";
import type {StorageData} from "./types/storage-data.ts";
import type {List} from "./types/list.ts";
import {ListCard} from "./component/ListCard/ListCard.tsx";
import {useState} from "react";
import ListAddEdit from "./component/ListAddEdit/ListAddEdit.tsx";

const defaultData: StorageData = {
    lists: []
};

type DisplayModeProps = {
    isEditMode: boolean,
    data: StorageData,
    switchMode: () => void,
    createList: (list: List) => void,
    editList: (list: List) => void,
    deleteList: (listId: number) => void,
    existantList: List[],
}

function DisplayMode({isEditMode, data, switchMode, createList, editList, deleteList, existantList}: DisplayModeProps) {


    const [selectedList, setSelectedList] = useState<List| null>(null);


    const selectList = (list: List) => {
        setSelectedList(list)
        switchMode();
    }

    const goToCreateMode = () => {
        setSelectedList(null)
        switchMode();
    }

    if (isEditMode) {
        return <ListAddEdit addList={createList} editList={editList} deleteList={deleteList} list={selectedList} existantList={existantList} switchMode={switchMode}/>;
    }

    return <>
        <header>
            <h1>Pull Request Auto Assigner</h1>
        </header>

        <main>
            <div className="grid">
                {data.lists.map((list, i) => (
                    <ListCard key={i} list={list} selectList={selectList}/>
                ))}
            </div>

        </main>

        <footer>
            <button onClick={goToCreateMode}>Créer une liste</button>
        </footer>
    </>;
}

function App() {
    const [data, setData] = useChromeStorage<StorageData>("personLists", defaultData);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const switchMode = () => {
        setIsEditMode(!isEditMode);
    };

    const createList = (list: List) => {
        setData({lists: [...data.lists, list]});
        switchMode();
    };

    const editList = (editList: List) => {
        const newLists: List[] = data.lists.filter((l: List) => l.id !== editList.id);
        setData({lists: [...newLists, editList]});
        switchMode();
    };

    const deleteList = (listId: number) => {
        const newLists: List[] = data.lists.filter((list: List) => list.id !== listId);
        setData({lists: newLists});
        switchMode();
    };


    return (
        <DisplayMode isEditMode={isEditMode} data={data} switchMode={switchMode} createList={createList} editList={editList}
                     deleteList={deleteList} existantList={data.lists}/>
    );
}

export default App;
