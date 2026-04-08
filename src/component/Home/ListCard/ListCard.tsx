import './ListCard.scss'
import React from "react";
import type {List} from "../../../types/list.ts";
import {GripVertical, PenLine, Users} from "lucide-react";
import {t} from "../../../utils/i18n.ts";
import {useAnimation} from "../../../hooks/useAnimation.ts";

type ListCardProps = {
    list: List,
    selectList: (list: List) => void
}

const MAX_PERSON_IN_CARD = 10;
export const ListCard: React.FC<ListCardProps> = ({list, selectList}: ListCardProps) => {
    const {animation} = useAnimation();

    const onSelectList = () => {
        selectList(list)
    }

    const assignPeople = () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id!, {action: "assignPeople", people: list.people, listName: list.name, animation: animation});
        });
    }

    const buildPerson = (text: string) => {
        return <span className="person-preview">{text}</span>
    }

    const peopleToDisplay = () => {
        return list.people
            .sort((p1, p2) => p1.localeCompare(p2))
            .slice(0, MAX_PERSON_IN_CARD)
            .map((a) => buildPerson(a))
    }

    const plusPeople = () => {
        const remaining = Math.max(list.people.length - list.people.slice(0, MAX_PERSON_IN_CARD).length, 0)
        if (remaining != 0){
            return buildPerson(`+${remaining}`);
        }
    }

    return (
        <div className="card">
            <div className="title">
                <h3><GripVertical size={12}/>{list.name}</h3>
                <i className="secondary">{list.people.length} {t('people', true)}</i>
            </div>
            <div className="people" onClick={assignPeople}>
                { peopleToDisplay() }
                { plusPeople() }
            </div>
            <button onClick={assignPeople} ><Users size={12}/>{t('assign')}</button>
            <button className="edit secondary" onClick={onSelectList}><PenLine size={12}/></button>
        </div>
    );
};