import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const produitAdd = createAsyncThunk("produit/add", async (product) => {
  try {
    let result = axios.post("http://localhost:5000/produit/add", product);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const produitGet = createAsyncThunk("produit/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/produit/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const produitDelete = createAsyncThunk("produit/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/produit//${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const produitUpdate = createAsyncThunk(
  "produit/update",
  async ({ id, produit }) => {
    try {
      let response = await axios.put(`http://localhost:5000/produit/${id}`, produit);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



const initialState = {
  produit: null,
  status: null,
};
export const produitSlice = createSlice({
  name: "produit",
  initialState,
  reducers: {},
  extraReducers: {
    [produitAdd.pending]: (state) => {
      state.status = "pending";
    },
    [produitAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [produitAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [produitGet.pending]: (state) => {
      state.status = "pending";
    },
    [produitGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.produit = action.payload.data.produit;
    },
    [produitGet.rejected]: (state) => {
      state.status = "fail";
    },
    [produitDelete.pending]: (state) => {
      state.status = "pending";
    },
    [produitDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [produitDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [produitUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [produitUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [produitUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default produitSlice.reducer;
