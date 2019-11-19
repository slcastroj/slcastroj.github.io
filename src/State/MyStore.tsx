import { createStore } from 'redux';
import StoreReducer from './StoreReducer';

const MyStore = createStore(StoreReducer);

export default MyStore;
