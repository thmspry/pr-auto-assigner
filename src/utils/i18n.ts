function lowerFirstChar(translation: string): string {
    return String(translation).charAt(0).toLowerCase() + String(translation).slice(1);
}

export function t(key: string, lowerCase: boolean = false): string {
    const translation: string = chrome.i18n.getMessage(key);
    const translationTransformed: string = lowerCase ? lowerFirstChar(translation) : translation;
    return translationTransformed || key;
}