import './App.css'
import {useChromeStorage} from "./hooks/useChromeStorage.ts";
import type {StorageData} from "./types/storage-data.ts";
import type {List} from "./types/list.ts";
import {ListCard} from "./component/ListCard.tsx";
import {useState} from "react";

const defaultData: StorageData = {
    lists: [{
        name: "aaa", people: ['lala', 'lolo']
    }]
};

type DisplayModeProps = {
    isEditMode: boolean,
    data: StorageData,
    addList: () => void
}

function DisplayMode({isEditMode, data, addList}: DisplayModeProps) {
    if (isEditMode) {
        return <p>Salut</p>;
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
            <button onClick={addList}>Ajouter une liste</button>
        </footer>
    </>;
}

function App() {
    const [data, setData] = useChromeStorage<StorageData>("personLists", defaultData);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const addList = () => {
        setIsEditMode(true);
        const newList: List = {name: "Nouvelle liste", people: []};
        setData({lists: [...data.lists, newList]});
    };

    return (
        <>
            <DisplayMode isEditMode={isEditMode} data={data} addList={addList}/>
        </>
    );
}

export default App;
