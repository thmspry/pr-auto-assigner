import {ListCard} from "./ListCard/ListCard.tsx";
import type {StorageData} from "../../types/storage-data.ts";
import type {List} from "../../types/list.ts";

type HomeProps = {
    data: StorageData,
    goToEditMode: (list: List) => void
    goToCreateMode: () => void
}

const Home = ({data, goToEditMode, goToCreateMode}: HomeProps) => {
    return (
        <>
            <header>
                <h1>Pull Request Auto Assigner</h1>
                <i></i>
            </header>

            <main>
                <div className="lists">
                    {data.lists.map((list, i) => (
                        <ListCard key={i} list={list} selectList={goToEditMode}/>
                    ))}
                </div>

            </main>

            <footer>
                <button onClick={goToCreateMode}>Créer une liste</button>
            </footer>
        </>
    );
};

export default Home;