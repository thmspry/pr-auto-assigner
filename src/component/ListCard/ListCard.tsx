import './ListCard.css'
import React, {useState} from "react";
import type {List} from "../../types/list.ts";
import {PenLine} from "lucide-react";

type ListCardProps = {
    list: List,
    selectList: (list: List) => void
}

export const ListCard: React.FC<ListCardProps> = ({list, selectList}: ListCardProps) => {

    const onSelectList = () => {
        selectList(list)
    }

    const assignPeople = () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id!, {action: "assignPeople", people: list.people});
        });
    }

    const [hover, setHover] = useState(false);

    return (
        <div className={`card ${hover ? "hover" : ""}`}>
            <div className="content" onClick={assignPeople}
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
            >
                <h3>{list.name}</h3>
            </div>
            <button className="edit" onClick={onSelectList}><PenLine/></button>
        </div>

    );
};