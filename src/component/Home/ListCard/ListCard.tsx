import './ListCard.scss'
import React from "react";
import type {List} from "../../../types/list.ts";
import {PenLine, Users} from "lucide-react";

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

    return (
        <div className="card">
            <div className="title" >
                <h3>{list.name}</h3>
                <i>{list.people.length} personnes</i>
            </div>
            <div className="people" onClick={assignPeople}>
                {list.people.map((a) => <p className="person-preview">{a}</p>)}
            </div>
            <button onClick={assignPeople}><Users size={12}/>Assigner</button>
            <button className="edit secondary" onClick={onSelectList}><PenLine size={12}/></button>
        </div>
    );
};