import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props ={
  title : String
}

const DateTime: React.FC<Props> = ({title}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.input}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={showDatePicker} style={[styles.textfield, styles.infoSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
          {date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
        />
      )}
      <Text style={[styles.info, styles.textTypo]}>Requis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      width: "100%",
      justifyContent: "center",
      paddingVertical: 0,
      paddingHorizontal: 12,
      overflow: "hidden",
      flex: 1,
      alignSelf: "stretch",
    },
    infoSpaceBlock: {
      marginTop: 4,
      alignSelf: "stretch",
      backgroundColor: "#FFFFFF", // Assurez-vous que ce style correspond à vos besoins
    },
    textTypo: {
      color: "rgba(0, 0, 0, 0.5)",
      textAlign: "left",
      lineHeight: 22,
      letterSpacing: 0,
    },
    title: {
      lineHeight: 20,
      fontWeight: "500",
      color: "#000",
      textAlign: "left",
      fontSize: 14,
      alignSelf: "stretch",
    },
    text: {
      height: 20,
      fontSize: 14,
      color: "rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
      flex: 1,
    },
    textfield: {
      borderRadius: 6,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 12,
      minHeight: 40, // Assurez-vous que les champs de texte sont suffisamment grands pour être faciles à interagir
    },
    info: {
      fontSize: 12,
      lineHeight: 16,
      marginTop: 4,
      alignSelf: "stretch",
      color: "rgba(0, 0, 0, 0.5)", // Assurez-vous que ce style correspond à vos besoins
    },
  });
  

export default DateTime;
