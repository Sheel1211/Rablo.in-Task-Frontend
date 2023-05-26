import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
};
export const productReducer = createReducer(initialState, {
  "GET_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "GET_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.products = action.payload.message;
  },
  "GET_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "GET_MAX_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "GET_MAX_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.maxProducts = action.payload.message;
  },
  "GET_MAX_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "GET_MIN_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "GET_MIN_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.minProducts = action.payload.message;
  },
  "GET_MIN_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "GET_FEATURED_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "GET_FEATURED_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.featured = action.payload.message;
  },
  "GET_FEATURED_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "ADD_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "ADD_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.products = action.payload.message;
  },
  "ADD_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "DELETE_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "DELETE_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.products = action.payload.message;
  },
  "DELETE_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "UPDATE_PRODUCTS_REQUEST": (state) => {
    state.loading = true;
  },
  "UPDATE_PRODUCTS_SUCCESS": (state, action) => {
    state.loading = false;
    state.products = action.payload.message;
  },
  "UPDATE_PRODUCTS_FAILURE": (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  "CLEAR_ERRORS": (state) => {
    state.error = null;
  },
});
