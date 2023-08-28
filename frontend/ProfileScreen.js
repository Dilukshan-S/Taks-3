import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

function ProfileScreen() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend after successful login
    const fetchUserData = async () => {
      try {
        const response = await axios.get('backend_url/profile');
        setUserData(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchUserData();
  }, []);

  return (
    <View>
      {userData ? (
        <Text>Welcome, {userData.username}!</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default ProfileScreen;
