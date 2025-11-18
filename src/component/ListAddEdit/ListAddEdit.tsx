import type {List} from "../../types/list.ts";
import {useState} from "react";

type ListAddEditProps = {
    addList: (list: List) => void,
    editList: (list: List) => void,
    deleteList: (listId: number) => void,
    existantList: List[],
    list?: List | null
};

const ListAddEdit = ({addList, editList, deleteList, list, existantList}: ListAddEditProps) => {

    const [listName, setListName] = useState<string>(list?.name ?? '')

    const listNameAlreadyExist = (): boolean => {
        const listNames = existantList.map((l: List) => l.name);
        return listNames.includes(listName);
    }

    function getNextListId(): number {
        const sortedById: List[] = existantList.sort((l1, l2) => l1.id - l2.id);
        const biggestListId = sortedById[sortedById.length - 1]?.id ?? 0;
        return biggestListId + 1;
    }

    const createList = () => {
        if (listNameAlreadyExist()) {
            return;
        }

        const nextId = getNextListId();

        const newList: List = {id: nextId, name: listName, people: []};
        addList(newList);
    }
    const onEditList = () => {
        if (listNameAlreadyExist() || !list) {
            return;
        }

        const newList: List = {id: list?.id, name: listName, people: []};
        editList(newList);
    }

    const deleteHehe = () => {
        if(!list) {
            return;
        }
        deleteList(list?.id);
    }

    return (
        <>
            <h3>Créer une liste</h3>
            <label htmlFor={'name'}>Nom</label>
            <input id={'name'} type={'text'} autoComplete={'off'} value={listName}
                   onChange={
                       (event) => setListName(event.target.value)
                   }
            />
            {
                listNameAlreadyExist() ? <p>Ce nom de liste existe déjà</p> : ''
            }


            {
                list ? <>
                    <button onClick={onEditList} disabled={listNameAlreadyExist()}>Modifier la liste</button>
                    <button onClick={deleteHehe}>🗑️</button>
                </> : <>
                    <button onClick={createList} disabled={listNameAlreadyExist()}>Créer la liste</button>
                </>
            }
        </>
    );
};

export default ListAddEdit;