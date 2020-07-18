import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export default (reducers: Reducer): Reducer => {
  const persistedReducer = persistReducer(
    {
      key: 'pecaZap',
      storage,
      // whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
