import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { login, getUserDetails } from "../api";

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigateToRegistration = () => {
    navigation.navigate('Registration');
  };

  const handleLogin = async () => {
    setLoading(true);


    try {
      const credentials = JSON.stringify({
        email,
        password,
      });

      const response = await login(credentials);

      if (response.ok) {
        const data = await response.json();

        navigation.navigate('Profile', { userId: data.userId });
      } else {
        console.error('Login failed:', response.status);
      }
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Email       </Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <Text style={styles.txt}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.createTxt}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.normalText}>New User?</Text>
          <TouchableOpacity onPress={navigateToRegistration}>
            <Text style={[styles.normalText, { color: "red" }]}>
              Create Account
            </Text>
          </TouchableOpacity>

      {loading && <Text style={styles.loading}>Loading...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16
  },
  txt: {
    marginLeft: -290
  },
  loading: {
    marginTop: 10,
    color: '#999',
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    width: 200,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#555",
    alignSelf: "center",
    justifyContent: "center",
  },
  createTxt: {
    color: "#fff",
    textAlign: "center",
  },
  normalText: {
    marginTop: 5
  }
});

export default LoginScreen;