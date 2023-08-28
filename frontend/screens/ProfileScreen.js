import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }) => {
  const { name, email } = route.params.user;

  return (
    <View style={styles.window}>
      <Text style={styles.login}>Profile</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.normalText}>Full Name</Text>
          <Text style={styles.normalText1}>{userDetails.name}</Text>
          <View style={{ width: 340, height: 1, backgroundColor: "#000" }} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.normalText}>Email</Text>
          <Text style={styles.normalText1}>{userDetails.email}</Text>
          <View style={{ width: 340, height: 1, backgroundColor: "#000" }} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: "#fff",
  },
  login: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 24,
  },
  container: {
    marginTop: 50,
    width: 350,
    alignSelf: "center",
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#F4EEEE",
    height: 50,
    borderRadius: 10,
    paddingLeft: 30,
  },
  button: {
    marginTop: 40,
    width: 200,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#000",
    alignSelf: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  lastSection: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
    marginTop: 30,
  },
  normalText: {
    fontSize: 18,
  },
  normalText1: {
    fontSize: 14,
  },
});

export default ProfileScreen;
