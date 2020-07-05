import React from 'react';
import {connect} from 'react-redux';
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos';
import List from './list'

class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ))
    }
    removeItem = (item) => {
        this.props.dispatch(handleDeleteTodo(item));
    }
    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id));
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input type='text' placeholder="Type Todo"
                    ref={(input) => this.input = input} />
                <button id='addTodo' onClick={this.addItem}>Add Todo</button>
                <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)