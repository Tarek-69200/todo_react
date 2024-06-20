import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import TodoItem from "./src/components/DeleteTodo";
import AddTodo from "./src/components/AddTodo";
import { saveTasks, getTasks,} from "./src/utils/storage";

const App = () => {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await getTasks();
      setTodos(storedTasks);
    };
    loadTasks();
  }, []);

  const addTodo = async (text) => {
    const newTodo = { text, id: Math.random().toString() };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    await saveTasks(updatedTodos); 
  };

  const handleDeleteTodo = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    await saveTasks(updatedTodos); 
  };

  return (
    <View style={styles.container}>
      <AddTodo onAddTodo={addTodo} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem todo={item} onDeleteTodo={handleDeleteTodo} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
    padding: 20,
    flex: 1,
  },
});

export default App;
