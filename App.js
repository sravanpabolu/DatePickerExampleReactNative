import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from './DatePicker'

export default function App() {
  const [aDate, setDate] = useState(new Date());

  dateCallback = (selectedDate) => {
    const currentDate = selectedDate || aDate;
    setDate(currentDate);
    console.log("Selected date => " + currentDate)
  }

  return (
    <View style={styles.container}>
      <Text>Get the date, by clicking on the Get Calender button</Text>
      <DatePicker
        selectedDateCallback={dateCallback}
      />
      <Text> Selected Date : {aDate.toDateString()} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
