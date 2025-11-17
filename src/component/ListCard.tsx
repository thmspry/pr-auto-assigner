import React from "react";
import type {List} from "../types/list.ts";


export const ListCard: React.FC<List> = ({ name, people }) => {
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ul>
        </div>
    );
};