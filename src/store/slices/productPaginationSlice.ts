import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  currentPage: number;
  pageSize: number;
}

const initialState: ISlice = {
  currentPage: 1,
  pageSize: 10,
};

const productPaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    resetPagination(state) {
      state.currentPage = 1;
      state.pageSize = 10;
    },
  },
});

export const { setCurrentPage, setPageSize, resetPagination } = productPaginationSlice.actions;

export default productPaginationSlice.reducer;
