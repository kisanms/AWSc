import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function Home({ navigation }) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  // Redirect to Auth screen if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigation.navigate("Auth");
    }
  }, [user, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Pop-med", fontSize: 30 }}>Home</Text>
      <Text style={{ fontFamily: "Pop-reg", fontSize: 20 }}>Welcome to Home</Text>
      {user && (
        <Pressable style={styles.button} onPress={signOut}>
          <Text style={styles.link}>Sign Out</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    fontFamily: "Pop-med",
    fontSize: 18,
    color: "blue",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
});