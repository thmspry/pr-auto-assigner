import React from "react";


export function useAnimation() {
    const [animation, setAnimation] = React.useState<boolean>(() => {
        return (localStorage.getItem('animation')) === "true";
    });

    React.useEffect(() => {
        localStorage.setItem('animation', String(animation));
    }, [animation]);

    return { animation: animation, setAnimation };
}