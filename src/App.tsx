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
    switchMode: () => void
    createList: (list: List) => void
}

function DisplayMode({isEditMode, data, switchMode, createList}: DisplayModeProps) {
    if (isEditMode) {
        return <ListAddEdit addList={createList}/>;
    }
    return <>
        <header>
            <h1>Pull Request Auto Assigner</h1>
        </header>

        <main>
            {data.lists.map((list, i) => (
                <ListCard key={i} name={list.name} people={list.people}/>
            ))}
        </main>

        <footer>
            <button onClick={switchMode}>Créer une liste</button>
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


    return (
        <DisplayMode isEditMode={isEditMode} data={data} switchMode={switchMode} createList={createList}/>
    );
}

export default App;
