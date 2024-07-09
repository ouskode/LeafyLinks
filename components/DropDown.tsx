import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

type SelectionProps = {
  options: any;
  onSelect: any;
};

const DropDown: React.FC<SelectionProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.buttonText}>{selectedOption || 'Selectioner la catégorie'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.optionsContainer}>
          {options.map((option:any, index: React.Key | null | undefined) => (
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
    alignSelf: 'auto',
  },
  button: {
    backgroundColor: '#45D364',
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