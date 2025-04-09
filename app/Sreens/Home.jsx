import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Pop-med', fontSize: 30 }}>Home</Text>
      <Text style={{ fontFamily: 'Pop-reg', fontSize: 20 }}>Welcome to Home </Text>
      <Pressable onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.link}>Go to Auth</Text>
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
});