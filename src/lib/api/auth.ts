// lib/api/auth.ts

import UserCredentialsModel from "@/models/UserCredentialsModel";
import axiosClient from "../axiosClient";
import UserDataModel from "@/models/UserDataModel";

// Register a new user
export const signUp = async (userData: UserDataModel) => {
  try {
    const response = await axiosClient.post('/auth/sign-up', userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up user", error);
    throw error;
  }
};

// Authenticate a user
export const signIn = async (credentials: UserCredentialsModel) => {
  try {
    const response = await axiosClient.post('/auth/sign-in', credentials);
    return response.data;
  } catch (error) {
    console.error("Error signing in user", error);
    throw error;
  }
};
