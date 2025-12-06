// // src/store/Slice/like-product-slice.tsx

// // Redux Import
// import { createSlice } from '@reduxjs/toolkit';
// // Export type
// export interface LikedState {
//   id: number;
//   thumbnail: string;
//   status: string;
//   title: string;
//   location: string;
//   price: string;
//   duration?: string;
//   bedrooms: string;
//   bathrooms: string;
//   area: string;
// }

// // export type LikedState = {
// //   title: string;
// //   id: number;
// //   price: number;
// //   thumbnail: string;
// //   description: string;
// // };
// // State
// const initialState: {
//   property: LikedState[] | null;
// } = {
//   property: null,
// };
// //  Like Slice
// const LikedSlice = createSlice({
//   name: 'property',
//   initialState,
//   reducers: {
//     addToLikeProperty: (state, action) => {
//       if (!state.property) {
//         state.property = [action.payload];
//       } else {
//         state.property.push(action.payload);
//       }
//     },
//     removeToLikeProperty: (state, action) => {
//       if (state.property) {
//         state.property = state.property.filter(
//           product => product.id !== action.payload,
//         );
//       }
//     },
//     removeAllLikedProperty: state => {
//       state.property = null;
//     },
//   },
// });

// export const {
//   addToLikeProperty,
//   removeToLikeProperty,
//   removeAllLikedProperty,
// } = LikedSlice.actions;
// export default LikedSlice.reducer;
