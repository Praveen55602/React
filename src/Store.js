import { configureStore } from "@reduxjs/toolkit";
//counterReducer name is automatic name(name of slice + reducer)
import counterReducer from "./CounterSlice";

//store all the reducers are registered in the store
export const store = configureStore({
  reducer: { counter: counterReducer },
});

export const RootState = store.getState;
export const dispatch = store.dispatch;
