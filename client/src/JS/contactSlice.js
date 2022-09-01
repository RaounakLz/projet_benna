import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const contactAdd = createAsyncThunk("contact/add", async (contact) => {
  try {
    let result = axios.post("http://localhost:5000/contact/add", contact);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const contactGet = createAsyncThunk("contact/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/contact/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const contactDelete = createAsyncThunk("contact/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/contact/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const    contactUpdate = createAsyncThunk(
  "contact/update",
  async ({ id, contact }) => {
    try {
      let response = await axios.put(`http://localhost:5000/contact/${id}`, contact);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



const initialState = {
    contacts: null,
  status: null,
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    [contactAdd.pending]: (state) => {
      state.status = "pending";
    },
    [contactAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [contactAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [contactGet.pending]: (state) => {
      state.status = "pending";
    },
    [contactGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.accessoires = action.payload.data?.contact;
    },
    [contactGet.rejected]: (state) => {
      state.status = "fail";
    },
    [contactDelete.pending]: (state) => {
      state.status = "pending";
    },
    [contactDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [accDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [ contactUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [   contactUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [   contactUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default contactSlice.reducer;
