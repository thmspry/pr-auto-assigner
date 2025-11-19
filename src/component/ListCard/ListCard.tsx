import './ListCard.css'
import React from "react";
import type {List} from "../../types/list.ts";

type ListCardProps = {
    list: List,
    selectList: (list: List) => void
}

export const ListCard: React.FC<ListCardProps> = ({ list, selectList }: ListCardProps) => {

    const onSelectList = () => {
      selectList(list)
    }

    return (
        <div className={'card'}>
            <h3>{list.name}</h3>
            <button className={'editBtn'} onClick={onSelectList}>✏️</button>
        </div>
    );
};