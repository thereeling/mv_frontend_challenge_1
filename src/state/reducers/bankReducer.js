// Reducer for global store.  Recieves an action and alters the state depending on the action type/case.
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + parseInt(action.payload);

        case "withdraw":
            return state - parseInt(action.payload);

        default:
            return state;
    }
};

export default reducer;