import { useEffect, useState } from "react";

export function useChromeStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        if (typeof chrome == "undefined" && !chrome.storage) {
            return;
        }

        chrome.storage.local.get([key], (result) => {
            const storedValue = result[key] as T | undefined;
            if (storedValue == undefined) {
                return;
            }
            setValue(storedValue);
        });
    }, [key]);

    const updateValue = (newValue: T) => {
        setValue(newValue);
        if (typeof chrome !== "undefined" && chrome.storage) {
            chrome.storage.local.set({ [key]: newValue });
        }
    };

    return [value, updateValue] as const;
}
