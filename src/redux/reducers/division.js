import { createReducer } from "@reduxjs/toolkit";

import {
  CREATE_DIVISION_REQUESTED_ACTION,
  CREATE_DIVISION_SUCCESS_ACTION,
  CREATE_DIVISION_ERROR_ACTION,
  LIST_DIVISIONS_REQUESTED_ACTION,
  LIST_DIVISIONS_SUCCESS_ACTION,
  LIST_DIVISIONS_ERROR_ACTION,
  GET_DIVISION_REQUESTED_ACTION,
  GET_DIVISION_SUCCESS_ACTION,
  GET_DIVISION_ERROR_ACTION,
  UPDATE_DIVISION_REQUESTED_ACTION,
  UPDATE_DIVISION_SUCCESS_ACTION,
  UPDATE_DIVISION_ERROR_ACTION,
  DELETE_DIVISION_REQUESTED_ACTION,
  DELETE_DIVISION_SUCCESS_ACTION,
  DELETE_DIVISION_ERROR_ACTION,
} from "../actions/division";

const initialState = {
  division: undefined,
  isLoading: false,
  divisions: [],
  error: "",
};

const divisionReducer = createReducer(initialState, (builder) => {
  //listar DIVISIONes
  builder.addCase(LIST_DIVISIONS_REQUESTED_ACTION, (state, action) => {
    state.isLoading = true;
  });

  builder.addCase(LIST_DIVISIONS_SUCCESS_ACTION, (state, action) => {
    state.divisions = action.payload;
    state.isLoading = false;
  });

  builder.addCase(LIST_DIVISIONS_ERROR_ACTION, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

  //crear DIVISION

  builder.addCase(CREATE_DIVISION_REQUESTED_ACTION, (state, action) => {
    state.isLoading = true;
  });

  builder.addCase(CREATE_DIVISION_SUCCESS_ACTION, (state, action) => {
    state.DIVISION = action.payload.token;
    state.isLoading = false;
  });

  builder.addCase(CREATE_DIVISION_ERROR_ACTION, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

  //Obtener DIVISION

  builder.addCase(GET_DIVISION_REQUESTED_ACTION, (state, action) => {
    state.isLoading = true;
  });

  builder.addCase(GET_DIVISION_SUCCESS_ACTION, (state, action) => {
    state.DIVISION = action.payload.token;
    state.isLoading = false;
  });

  builder.addCase(GET_DIVISION_ERROR_ACTION, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

  //Actualizar DIVISION

  builder.addCase(UPDATE_DIVISION_REQUESTED_ACTION, (state, action) => {
    state.isLoading = true;
  });

  builder.addCase(UPDATE_DIVISION_SUCCESS_ACTION, (state, action) => {
    state.DIVISION = action.payload.token;
    state.isLoading = false;
  });

  builder.addCase(UPDATE_DIVISION_ERROR_ACTION, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

  //Eliminar DIVISION

  builder.addCase(DELETE_DIVISION_REQUESTED_ACTION, (state, action) => {
    state.isLoading = true;
  });

  builder.addCase(DELETE_DIVISION_SUCCESS_ACTION, (state, action) => {
    state.DIVISION = action.payload.token;
    state.isLoading = false;
  });

  builder.addCase(DELETE_DIVISION_ERROR_ACTION, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
});

export default divisionReducer;


