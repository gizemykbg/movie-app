import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "./reducers/userReducer";
import { movReducer } from "./reducers/movReducer";
import { loginReducer } from "./reducers/loginReducer";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer,
  movie: movReducer,
  login: loginReducer,
});

const persistConfig = {
  key: "app",
  storage,
  whitelist: ["user", "watchlist", "favorites"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
export default store;
