import React, { useState } from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import TodoItem from "./src/components/TodoItem";
import AddTodo from "./src/components/AddTodo";

/**
 * Represents the main component of the Todo List application.
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
  const [todos, setTodos] = useState([
    { text: "Faire son CV", key: "1" },
    { text: "Postuler sur Hello Work", key: "2" },
    { text: "Mise en place du portfollio", key: "3" },
    { text: "Préparation des entretiens", key: "4" },
    { text: "Rester motivé", key: "5" },
  ]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      { text: text, key: Math.random().toString() },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <AddTodo onAddTodo={addTodo} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            // Ici je passe la fonction deleteTodo en tant que prop onDeleteTodo
            <TodoItem todo={item} onDeleteTodo={deleteTodo} />
          )}
          keyExtractor={(item) => item.key}
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
