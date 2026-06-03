// src/redux/redux.ts
import { configureStore } from "@reduxjs/toolkit";
import sliceCounter from "@/provider/redux/slice/SliceCounter";
import sliceApp from "@/provider/redux/slice/SliceApp";
import { dynamicStateApp } from "@/provider/redux/state/StateApp";

const store = configureStore({
  reducer: {
    counter: sliceCounter,
    app: sliceApp,
  },
});

export const dynamicStore = (lang: string) =>
  configureStore({
    reducer: {
      app: sliceApp,
      counter: sliceCounter,
    },
    preloadedState: {
      app: dynamicStateApp(lang),
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export default store;
