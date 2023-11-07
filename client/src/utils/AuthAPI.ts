import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';

// Storing a JWT token securely
export async function storeToken(jwtToken : string) {
  try {
    await EncryptedStorage.setItem('authToken', jwtToken);
  } catch (error) {
    // Handle errors
  }
}

export async function storeAuthStatus(status : string) {
  try {
    await EncryptedStorage.setItem('authStatus', status);
  } catch (error) {
    // Handle errors
  }
}

export async function getAuthStatus() {
  try {
    const token = await EncryptedStorage.getItem('authStatus');
    return token;
  } catch (error) {
    // Handle errors
  }
}


// Retrieving a JWT token securely
export async function getAuthToken() {
  try {
    const token = await EncryptedStorage.getItem('authToken');
    return token;
  } catch (error) {
    // Handle errors
  }
}


export const loginUser = async (username : string, password : string) => {
  try {
    const response = await axios.post('https://node-mobile.onrender.com/auth/login', {
      email: username,
      password: password,
    });

    const { token } = response.data;

    return token; // Assuming the server responds with a token
  } catch (error) {
    console.error('Login failed:', error);
    return "failed" 
    // Handle login failure
  }
};

export const registerUser = async (username : string, password : string) => {
    try {
      const response = await axios.post('https://node-mobile.onrender.com/auth/register', {
        email: username,
        password: password,
      });
  
      const { status } = response.data;
  
      return status; // Assuming the server responds with a token
    } catch (error) {
      console.error('Registration failed:', error);
      return "failed" // Handle registration failure
    }
  };
  