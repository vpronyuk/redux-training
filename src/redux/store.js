// src/redux/store.js

import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from "./constants";

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const rootReducer = (state = initialState, action) => {
  return state;
};

const enchancer = devToolsEnhancer();
export const store = createStore(rootReducer, enchancer);
