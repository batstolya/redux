import { combineReducers, createStore} from 'redux';
import carsReducer from '../features/cars';

const reducer = combineReducers({
    cars: carsReducer,
});
const store = createStore(reducer)

export type RootState = ReturnType<typeof store.getState>
export default store;