import {ListCard} from "./ListCard/ListCard.tsx";
import type {StorageData} from "../../types/storage-data.ts";
import type {List} from "../../types/list.ts";
import {Bolt, Plus} from "lucide-react";
import {t} from "../../utils/i18n.ts";
import {Reorder} from 'framer-motion';

type HomeProps = {
    data: StorageData,
    goToEditMode: (list: List) => void
    goToCreateMode: () => void
    goToSettingsMode: () => void,
    setLists: (lists: List[]) => void
}

const Home = ({data, goToEditMode, goToCreateMode, goToSettingsMode, setLists}: HomeProps) => {
    return (
        <>
            <header>
                <div className="left">
                    <h1>PR Auto</h1>
                    <button className="secondary" onClick={goToSettingsMode}><Bolt size={14}/></button>
                </div>

                <button onClick={goToCreateMode}><Plus size={14}/>{t('add')}</button>
            </header>

            <main>
                <Reorder.Group values={data.lists} onReorder={setLists}>
                <div className="lists">
                    {data.lists.map((list) => (
                        <Reorder.Item key={list.id} value={list} >
                        <ListCard key={list.id} list={list} selectList={goToEditMode}/>
                        </Reorder.Item>
                    ))}
                </div>
                </Reorder.Group>
            </main>
        </>
    );
};

export default Home;