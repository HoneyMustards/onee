import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter'],
  stateReconciler: autoMergeLevel2,
  transforms: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, bindMiddleware([thunkMiddleware]))
let persistor = persistStore(store)

export {
  store,
  persistor
}