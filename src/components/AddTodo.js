import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

/**
 * Composant pour ajouter une nouvelle tâche.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onAddTodo - La fonction appelée lorsqu'une nouvelle tâche est ajoutée.
 * @returns {JSX.Element} - Le composant d'ajout de tâche.
 */
const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  const handleAddTodo = () => {
    if (text.trim().length === 0) {
      // Ici je fais un controle si je champs est strictement égale à 0
      Alert.alert("Merci de remplir un champ.");
    } else {
      // Ici j'appelle la fonction onAddTodo avec le texte en paramètre
      onAddTodo(text);
      setText(""); // Ici je remet le champs vide après avoir ajouter la tâche
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une nouvelle tâche..."
        onChangeText={handleChange}
        value={text} // Ici je lie la valeur du champs à la variable text
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "grey",
    borderRadius: 10,
  },
  addButton: {
    marginTop: 30,
    backgroundColor: "green", // Ici, vous pouvez ajuster la couleur du bouton
    padding: 10,
    width: 200,
    alignSelf: "center",

    borderRadius: 50,
  },
  addButtonText: {
    color: "white", // Couleur du texte du bouton
    textAlign: "center", // Centrer le texte dans le bouton
  },
});

export default AddTodo;
