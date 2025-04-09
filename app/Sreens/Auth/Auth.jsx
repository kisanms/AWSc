import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function Auth({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'Pop-bold', fontSize: 30 }}>Auth</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.link}>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    fontFamily: 'Pop-med',
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-end'
  }
});