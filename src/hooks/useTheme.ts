import React from "react";

export type Theme = 'light' | 'dark' | 'auto';

export function useTheme() {
    const [theme, setTheme] = React.useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'auto';
    });

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
}