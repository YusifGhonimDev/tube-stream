import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { channelReducer } from "./reducers/channelReducer";
import { feedReducer } from "./reducers/feedReducer";
import { searchReducer } from "./reducers/searchReducer";
import { videoReducer } from "./reducers/videoReducer";

const rootReducer = combineReducers({
  feedReducer,
  videoReducer,
  channelReducer,
  searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
