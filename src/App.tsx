import './App.scss'
import {useChromeStorage} from "./hooks/useChromeStorage.ts";
import type {StorageData} from "./types/storage-data.ts";
import type {List} from "./types/list.ts";
import {useState} from "react";
import ListAddEdit from "./component/ListAddEdit/ListAddEdit.tsx";
import Home from "./component/Home/Home.tsx";
import Settings from "./component/Settings/Settings.tsx";
import {useTheme} from "./hooks/useTheme.ts";

type DisplayMode = 'home' | 'add-edit' | 'settings';

const defaultData: StorageData = {
    lists: []
};

type DisplayModeProps = {
    mode: DisplayMode,
    data: StorageData,
    setMode: (mode: DisplayMode) => void,
    createList: (list: List) => void,
    editList: (list: List) => void,
    deleteList: (listId: number) => void,
    existantList: List[],
}

function DisplayMode({mode, data, setMode, createList, editList, deleteList, existantList}: DisplayModeProps) {


    const [selectedList, setSelectedList] = useState<List | null>(null);


    const goToEditMode = (list: List) => {
        setSelectedList(list)
        setMode('add-edit');
    }

    const goToCreateMode = () => {
        setSelectedList(null)
        setMode('add-edit');
    }

    const goToSettingsMode = () => {
        setMode('settings');
    }

    const goBackToHome = () => setMode('home');


    switch (mode) {
        case 'home':
            return <Home goToCreateMode={goToCreateMode} goToEditMode={goToEditMode} goToSettingsMode={goToSettingsMode} data={data}/>;

        case 'add-edit':
            return <ListAddEdit addList={createList} editList={editList} deleteList={deleteList} list={selectedList}
                                existantList={existantList} goBack={goBackToHome}/>;
        case 'settings':
            return <Settings goBack={goBackToHome}/>
    }
}

function App() {
    const [data, setData] = useChromeStorage<StorageData>("personLists", defaultData);
    const [mode, setMode] = useState<DisplayMode>('home');
    useTheme();

    const createList = (list: List) => {
        setData({lists: [...data.lists, list]});
        setMode('home');
    };

    const editList = (editList: List) => {
        const newLists: List[] = data.lists.filter((l: List) => l.id !== editList.id);
        setData({lists: [...newLists, editList]});
        setMode('home');
    };

    const deleteList = (listId: number) => {
        const newLists: List[] = data.lists.filter((list: List) => list.id !== listId);
        setData({lists: newLists});
        setMode('home');
    };


    return (
        <DisplayMode mode={mode} data={data} setMode={setMode} createList={createList} editList={editList}
                     deleteList={deleteList} existantList={data.lists}/>
    );
}

export default App;
