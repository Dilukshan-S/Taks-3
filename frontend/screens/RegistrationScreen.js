import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { register, getUserDetails} from "../api";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setLoading(true);

    try {
      const credentials = {
        name,
        email,
        password,
      };
    
      const response = await register(JSON.stringify(credentials));
      
      if (response) {
        const { data: { token, userId } } = response;
        console.log(response.data);
        console.log(userId);
        console.log("Login Successful"); 
        const userDetails = await getUserDetails(token, Number(userId));
        navigation.navigate("UserProfile", { userDetails });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    finally {
      // Set loading state back to false after the request
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Name       </Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <Text style={styles.txt}>Email       </Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <Text style={styles.txt}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.createTxt}>Create Account</Text>
      </TouchableOpacity>

      {loading && <Text style={styles.loading}>Loading...</Text>}
     {error && <Text style={styles.error}>{error}</Text>}

      <Text style={styles.normalText}>Already Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={ { color: "red" }}>
                Log In
           </Text>
        </TouchableOpacity>
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
    borderRadius: 5
  },
  loading: {
    marginTop: 10,
    color: '#999',
  },
  txt: {
    marginLeft: -290,
    marginBottom: 5,
    marginTop: 10
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
  }
});

export default RegistrationScreen;