export const state = () => ({
    posts: []
});

export const mutatations = {
    frontPagePosts(state, posts){
        state.posts = posts;
    }
}
