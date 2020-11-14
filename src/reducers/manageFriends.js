export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return ({...state, friends: [
                ...state.friends, 
                action.friend]})
            break
        case "REMOVE_FRIEND":
            const oldFriends = state.friends.filter(friend => friend.id !== action.id)
            return ({
                friends: oldFriends
            })
            break
        default:
            return state;
    }
}
