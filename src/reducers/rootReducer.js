const initState = {
    posts: [
        {id: '1', title: 'Sleeping Habits Of Pandas', body: 'Pandas sleep a lot.'},
        {id: '2', title: 'What Pandas Eat', body: 'Pandas eat bamboo'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer