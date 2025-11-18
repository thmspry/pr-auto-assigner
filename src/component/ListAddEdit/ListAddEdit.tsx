import type {List} from "../../types/list.ts";
import {useState} from "react";

type ListAddEditProps = {
    addList: (list: List) => void
};

const ListAddEdit = ({addList}: ListAddEditProps) => {

    const [listName, setListName] = useState<string>('')

    const createList = () => {
        const newList: List = {name: listName, people: []};
        addList(newList);
    }

    return (
        <>
            <h3>Créer une liste</h3>
            <label htmlFor={'name'}>Nom</label>
            <input id={'name'} type={'text'} autoComplete={'off'} value={listName}
                   onChange={(event) => {setListName(event.target.value);}}
            />

            <button onClick={createList}>Créer la liste</button>
        </>
    );
};

export default ListAddEdit;