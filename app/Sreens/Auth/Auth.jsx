import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react-native";

function Auth({ navigation }) {
  const { user } = useAuthenticator((context) => [context.user]);

  // Navigate to Home screen when user is authenticated
  useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
  }, [user, navigation]);

  // Render minimal UI since withAuthenticator handles the auth UI
  return (
    <View style={{ flex: 1, padding: 20, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "Pop-bold", fontSize: 30 }}>Auth</Text>
      {/* The withAuthenticator HOC will render the Amplify UI here */}
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

// Wrap Auth component with withAuthenticator
export default withAuthenticator(Auth, {
  signUpAttributes: ["email", "password"], // Customize sign-up fields if needed
});