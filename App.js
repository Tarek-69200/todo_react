import React, { useState } from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import TodoItem from "./src/components/DeleteTodo";
import AddTodo from "./src/components/AddTodo";

/**
 * Represents the main component of the Todo List application.
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
  const [todos, setTodos] = useState([
    { text: "Faire son CV", id: "1" },
    { text: "Postuler sur Hello Work", id: "2" },
    { text: "Mise en place du portfollio", id: "3" },
    { text: "Préparation des entretiens", id: "4" },
    { text: "Rester motivé", id: "5" },
  ]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      { text: text, id: Math.random().toString() },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
