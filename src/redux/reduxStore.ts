import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import authReducer from '../components/Authorization/reducer';
import userPageReducer from '../components/RepositoryCard/reducer';
import allRepositoriesPageReducer from '../components/AllRepositories/reducer';

const reducers = combineReducers({
  allRepositoriesPageReducer,
  userPageReducer,
  authReducer
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
