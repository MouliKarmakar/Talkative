import { combineSlices } from "@reduxjs/toolkit";
import { userAuthSlice } from "../Slice/UserAuthSlice";
export const rootReducer = combineSlices({
    userSlice: userAuthSlice
});