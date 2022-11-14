const counterReducer = (state = 0, action) => {
    const value = (action.payload ?? 1)

    switch (action.type) {
        case 'INCREMENT':
            return state + value
        case 'DECREMENT':
            return state - value
        default:
            return state
    }
}

export default counterReducer