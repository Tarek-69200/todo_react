import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <View style={styles.item}>
      <Text style={todo.completed ? styles.itemTextCompleted : styles.itemText}>
        {todo.text}
      </Text>
      <TouchableOpacity
        onPress={() => onDeleteTodo(todo.key)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Styles for the TodoItem component.
 * @typedef {Object} Styles
 * @property {Object} item - Styles for the item container.
 * @property {Object} itemText - Styles for the item text.
 * @property {Object} itemTextCompleted - Styles for the completed item text.
 * @property {Object} deleteButton - Styles for the delete button.
 * @property {Object} deleteButtonText - Styles for the delete button text.
 */
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    color: "black",
  },
  itemTextCompleted: {
    color: "pink",
    textDecorationLine: "line-through",
  },
  
  deleteButtonText: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "red",
    color: "pink",
  },
});

export default TodoItem;
