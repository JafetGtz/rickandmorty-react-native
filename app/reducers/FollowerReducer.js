import { createStore  } from 'redux'

const  initial_state = {
    cart: [{
        name: "user initial", id: 100
    }],
}

const FollowersReducer = ( state = initial_state,  action ) => {
    switch (action.type) {
        case "ADD_FOLLOW":
         return { ...state, cart: state.cart.concat(action.value)  }
        default:
        return state;
            
    }
}


export default store = createStore(FollowersReducer, initial_state);
