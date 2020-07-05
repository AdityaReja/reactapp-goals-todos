import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receievData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(receievData(todos, goals));
        })
    }
}