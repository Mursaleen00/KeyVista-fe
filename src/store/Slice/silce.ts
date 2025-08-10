// // src/store/favoritesSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// // interface Favorite {
// //   id: string;
// //   title: string;
// //   thumbnail: string;
// //   price: string;
// //   duration: string;
// // }
// export interface Favorite {
//   id?: number;
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

// interface FavoritesState {
//   items: Favorite[];
// }

// const initialState: FavoritesState = {
//   items: [],
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     toggleFavorite: (state, action: PayloadAction<Favorite>) => {
//       const exists = state.items.find(item => item.id === action.payload.id);
//       if (exists) {
//         // agar already favorite me hai, to remove kar do
//         state.items = state.items.filter(item => item.id !== action.payload.id);
//       } else {
//         // warna add kar do
//         state.items.push(action.payload);
//       }
//     },
//   },
// });

// export const { toggleFavorite } = favoritesSlice.actions;
// export default favoritesSlice.reducer;
