import { useState, useEffect } from 'react';

const useStorageState = (nameItem, initialValue) => {
    const [ items, setItems ] = useState(initialValue);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    
    useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(nameItem);
            if(localStorageItem) {
                setItems(JSON.parse(localStorageItem));
            } else {
                localStorage.setItem(nameItem, JSON.stringify(initialValue));
            }
        } catch (error) {
            setError(error.message);
        }
    }, []);

    const saveItems = (item) => {
        try {
            localStorage.setItem(nameItem, JSON.stringify(item));
            setItems(item);
        } catch (error) {
            setError(error.message);
        }        
    }


    return { items, saveItems, loading, error };
};

export { useStorageState };