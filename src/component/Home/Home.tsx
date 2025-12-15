import {ListCard} from "./ListCard/ListCard.tsx";
import type {StorageData} from "../../types/storage-data.ts";
import type {List} from "../../types/list.ts";
import {Bolt, Plus} from "lucide-react";
import {t} from "../../utils/i18n.ts";

type HomeProps = {
    data: StorageData,
    goToEditMode: (list: List) => void
    goToCreateMode: () => void
    goToSettingsMode: () => void
}

const Home = ({data, goToEditMode, goToCreateMode, goToSettingsMode}: HomeProps) => {
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
                <div className="lists">
                    {data.lists.map((list, i) => (
                        <ListCard key={i} list={list} selectList={goToEditMode}/>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;