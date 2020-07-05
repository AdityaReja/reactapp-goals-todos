import React from 'react';
import {connect} from 'react-redux';
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals';
import List from './list'

class Goals extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        ))
    }
    removeItem = (item) => {
        this.props.dispatch(handleDeleteGoal(item));
    }
    render() {
        return (
            <div>
                <h1>Goals List</h1>
                <input type='text' placeholder="Type Todo"
                    ref={(input) => this.input = input} />
                <button id='addGoal' onClick={this.addItem}>Add Goal</button>
                <List items={this.props.goals} remove={this.removeItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)