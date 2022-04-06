// GLobal store for entire app.
import { createStore } from "@reduxjs/toolkit";
import reducers from './reducers/index';

export const store = createStore(
    reducers,
    {}
)