import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Alert, document } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button
  onPress={() => getDateTime()}
  title="LOG TIME"
  color="#841584"
  accessibilityLabel="Log time."
/>
      <StatusBar style="auto" />
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

const getDateTime=()=>{
  
  var dt = new Date();

  var date = dt.getDate();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
  var hours = dt.getHours();
  var minutes = (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
  var seconds = (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();

  Alert.alert(hours + ':' + minutes + ':' + seconds + ' (' + date + '-' + month + '-' + year + ')');
  return date + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}