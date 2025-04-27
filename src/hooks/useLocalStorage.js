import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
    const [value, setValue] = useState(() => {
        try {
            const localData = localStorage.getItem(key);
            if (localData) return JSON.parse(localData);
            else return initialState;
        } catch (error) {
            return initialState;
        }
    });

    useEffect(() => {
        console.log(value);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
