const api = Object.freeze({
    getAllPosts: "/wp-json/wp/v2/posts",
    getAllTags: "/wp-json/wp/v2/tags",
    getAllPages: "/wp-json/wp/v2/pages",
    getAllTaxonomies: "/wp-json/wp/v2/taxonomies",
    getAllCategories: "/wp-json/wp/v2/categories",
    getAllImages: "/wp-json/wp/v2/media",
    getAllTypes: "/wp-json/wp/v2/types",
    getAllUsers: "/wp-json/wp/v2/users",

    search: "/wp-json/wp/v2/search"
});

export default api
