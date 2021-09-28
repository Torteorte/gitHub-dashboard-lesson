import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import userPageReducer from './UserPage/userPageReducer';
import allRepositoriesPageReducer from './AllRepositoriesPage/allRepositoriesReducer';

const reducers = combineReducers({
  userPageReducer,
  allRepositoriesPageReducer
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
