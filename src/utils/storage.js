import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "TODOS";

export const getTodos = async () => {
    try {
        const todos = await AsyncStorage.getItem(STORAGE_KEY);
        return todos != null ? JSON.parse(todos) : [];
    } catch (error) {
        console.error("erreur pour récupérer les données", error);
        return [];
    }
    }

export const saveTodos = async (todos) => {
    try {
        const jsonTodos = JSON.stringify(todos);
        await AsyncStorage.setItem(STORAGE_KEY, jsonTodos);
    } catch (error) {
        console.error("Erreur de l'enregistrement", error);
    }
    }

export const clearTodos = async () => {

    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Erreur de suppression", error);
    }
    }

