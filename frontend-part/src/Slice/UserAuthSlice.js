import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../lib/axiosInstance";
import { Endpoints } from "../lib/apiendPoints";

const initialState = {
    user: null,
    isSigningUp: false,
    isSigningIn: false,
    isSigningOut: false,
    error: null,
    isCheckingAuth: true,
    isUpdatingProfile: false,
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
    }
});