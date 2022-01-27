import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import userReducer from "./user";
import loginReducer from "./login";
import favReducer from "./favorite";
import watchlistReducer from "./watchlist";

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  favorites: favReducer,
  watchlist: watchlistReducer,
});

const persistConfig = {
  key: "app",
  storage,
  whitelist: ["user", "watchlist", "favorites", "login"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
export default store;
