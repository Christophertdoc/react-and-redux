export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id  // This is shorthand for "id: id"
    }
}