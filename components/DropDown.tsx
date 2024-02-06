import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DropDown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.buttonText}>{selectedOption || 'Select an option'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.optionsContainer}>
          {options.map((option: string | number | boolean | React.SetStateAction<null> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | undefined, index: React.Key | null | undefined) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelectOption(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  optionsContainer: {
    maxHeight: 200, // Limite la hauteur du conteneur d'options pour éviter qu'il prenne trop de place
    backgroundColor: '#f0f0f0',
    marginTop: 5,
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  optionText: {
    textAlign: 'center',
  },
});

export default DropDown;