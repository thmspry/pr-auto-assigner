import './ListCard.scss'
import React from "react";
import type {List} from "../../../types/list.ts";
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

    return (
        <div className="card">
            <div className="content" onClick={assignPeople}>
                <h3>{list.name}</h3>
            </div>
            <button className="edit" onClick={onSelectList}><PenLine size={16}/></button>
        </div>

    );
};