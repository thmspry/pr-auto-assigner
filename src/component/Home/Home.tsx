import {ListCard} from "./ListCard/ListCard.tsx";
import type {StorageData} from "../../types/storage-data.ts";
import type {List} from "../../types/list.ts";
import {Plus} from "lucide-react";

type HomeProps = {
    data: StorageData,
    goToEditMode: (list: List) => void
    goToCreateMode: () => void
}

const Home = ({data, goToEditMode, goToCreateMode}: HomeProps) => {
    return (
        <>
            <header>
                <h1>PR Auto</h1>
                <button onClick={goToCreateMode}><Plus size={14}/>Ajouter</button>
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