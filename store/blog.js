export const state = () => ({
    posts: [],
})

export const mutations = {
    savePosts(state, data){
        state.posts = data;
    }
}
