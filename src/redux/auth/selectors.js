// File: src/redux/auth/selectors.js

export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;



