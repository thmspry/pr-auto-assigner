import React from "react";

export type Animation = 'none' | 'fire' | 'magic' | 'confetti';

export function useAnimation() {
    const [animation, setAnimation] = React.useState<string>(() => {
        return (localStorage.getItem('animation') as Animation) || 'none';
    });

    React.useEffect(() => {
        localStorage.setItem('animation', animation);
    }, [animation]);

    return { animation: animation, setAnimation };
}