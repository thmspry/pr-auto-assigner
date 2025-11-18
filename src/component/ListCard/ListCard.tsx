import './ListCard.css'
import React from "react";
import type {List} from "../../types/list.ts";


export const ListCard: React.FC<List> = ({ name }: List) => {
    return (
        <div className={'card'}>
            <h3>{name}</h3>
            <button>👦</button>
        </div>
    );
};