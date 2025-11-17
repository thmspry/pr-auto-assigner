import './App.css'
import {useChromeStorage} from "./hooks/useChromeStorage.ts";
import type {StorageData} from "./types/storage-data.ts";
import type {List} from "./types/list.ts";
import {ListCard} from "./component/ListCard.tsx";

const defaultData: StorageData = { lists: [{
    name: "aaa", people: ['lala', 'lolo']
    }] };

function App() {
    const [data, setData] = useChromeStorage<StorageData>("personLists", defaultData);

    const addList = () => {
        const newList: List = { name: "Nouvelle liste", people: [] };
        setData({ lists: [...data.lists, newList] });
    };

    return (
        <div>
            <button onClick={addList}>Ajouter une liste</button>

            {data.lists.map((list, i) => (
                <ListCard key={i} name={list.name} people={list.people} />
            ))}
        </div>
    );
}

export default App;
