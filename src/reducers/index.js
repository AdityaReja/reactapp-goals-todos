import {combineReducers} from 'redux';
import todos from './todo'
import goals from './goals'
import loading from './loading'

export default combineReducers({
    todos,
    goals,
    loading
})