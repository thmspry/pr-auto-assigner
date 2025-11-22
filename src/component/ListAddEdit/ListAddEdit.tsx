import './ListAddEdit.scss'
import type {List} from "../../types/list.ts";
import {useState} from "react";
import {ArrowBigLeft, Trash2} from "lucide-react";
import Person from "./Person/Person.tsx";

type ListAddEditProps = {
    addList: (list: List) => void,
    editList: (list: List) => void,
    deleteList: (listId: number) => void,
    existantList: List[],
    list?: List | null,
    switchMode: () => void,
};

const ListAddEdit = ({addList, editList, deleteList, list, existantList, switchMode}: ListAddEditProps) => {

    const [listName, setListName] = useState<string>(list?.name ?? '');
    const [people, setPeople] = useState<string[]>(list?.people ?? [])
    const [peopleInput, setPeopleInput] = useState<string>('');

    const listNameAlreadyExist = (): boolean => {
        if (listName === list?.name) {
            return false;
        }
        const listNames = existantList.map((l: List) => l.name);
        return listNames.includes(listName);
    }

    const actionIsDisabled = () => {
        return listNameAlreadyExist();
    }

    function getNextListId(): number {
        const sortedById: List[] = existantList.sort((l1, l2) => l1.id - l2.id);
        const biggestListId = sortedById[sortedById.length - 1]?.id ?? 0;
        return biggestListId + 1;
    }

    const createList = () => {
        if (actionIsDisabled()) {
            return;
        }

        const nextId = getNextListId();

        const newList: List = {id: nextId, name: listName, people: people};
        addList(newList);
    }
    const onEditList = () => {
        if (actionIsDisabled() || !list) {
            return;
        }

        const newList: List = {id: list?.id, name: listName, people: people};
        editList(newList);
    }

    const deleteHehe = () => {
        if (!list) {
            return;
        }
        deleteList(list?.id);
    }

    const addPerson = () => {
        const actualInput = peopleInput.trim();
        if (people.includes(actualInput) || actualInput === '') {
            return;
        }
        setPeople([...people, actualInput]);
        setPeopleInput('');
    }

    const deletePerson = (person: string) => {
        const withoutPerson = people.filter((p) => p !== person);
        setPeople(withoutPerson);
    }

    const correspondToInput = (person: string): boolean => {
        const actualInput = peopleInput.trim();
        return person === actualInput;
    }

    return (
        <div className="add-edit">
            <header>
                <button className="back-btn" onClick={switchMode}><ArrowBigLeft/></button>
                <h3>Créer une liste</h3>
            </header>

            <main>
                <div className="field">
                    <label htmlFor={'name'}>Nom</label>
                    <input id={'name'} type={'text'} autoComplete={'off'} value={listName}
                           onChange={
                               (event) => setListName(event.target.value)
                           }
                    />
                    {
                        listNameAlreadyExist() ? <p>Ce nom de liste existe déjà</p> : ''
                    }
                </div>

                <div className="field">
                    <label htmlFor={'people'}>Personnes</label>
                    <div className="people-list">
                        {people.map((p) =>
                            <Person person={p} correspondToInput={correspondToInput(p)}
                                    onClick={() => deletePerson(p)}/>
                        )}
                        <div className="input-person">
                            <input id={'people'} type={'text'} autoComplete={'off'}
                                   value={peopleInput}
                                   onChange={
                                       (event) => setPeopleInput(event.target.value)
                                   }
                                   onKeyDown={(event) => {
                                       if (event.key === 'Enter') {
                                           addPerson();
                                       }
                                   }}
                            />
                            <button onClick={addPerson}>+</button>
                        </div>
                    </div>
                </div>


            </main>

            <footer>
                {
                    list ? <>
                            <button className="delete" onClick={deleteHehe}><Trash2 onClick={deleteHehe}/></button>
                            <button className="main-action" onClick={onEditList} disabled={actionIsDisabled()}>
                                Modifier la liste
                            </button>
                        </> :
                        <button className="main-action" onClick={createList} disabled={actionIsDisabled()}>
                            Créer la liste
                        </button>

                }
            </footer>

        </div>
    );
};

export default ListAddEdit;