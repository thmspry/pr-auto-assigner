import {Info} from "lucide-react";
import './InfoTooltip.scss'
import React from "react";

const InfoTooltip = ({children }: { children: React.ReactNode }) => {
    return (
        <div className={'wrapper'}>
            <Info size={14} className="info-icon"/>
            <div className="info-text">
                {children}
            </div>
        </div>
    );
};

export default InfoTooltip;