import api from "../enums/api";
/**
 * @param axios {Function}
 * @param perPage {number}
 * @param order {string}
 * @param categories {number}
 * @param categoriesExclude {number}
 * @param tags {string}
 * */
export async function getAllPost(axios, perPage, order, categories, categoriesExclude, tags){
    let url = api.getAllPosts;

    perPage !== undefined ? url += `?per_page=${perPage}` : url;
    order !== undefined ? url += `?order=${order}` : url;
    categories !== undefined ? url += `?categories=${categories}` : url;
    categoriesExclude !== undefined ? url += `?categories_exclude=${categoriesExclude}` : url;
    tags !== undefined ? url += `?tags=${tags}` : url;

    return await axios.$get(`http://localhost:8000${url}`);
}

/**
 * @param perPage {number}
 * */
export async function getAllTags(perPage, order){
    await this.$axios.$get(`http://localhost:8000/${api.getAllTags}/per_page=${perPage}`);
}

/**
 * @param payload
 * */
export async function getAllPages(payload){
    await this.$axios.$get(api.getAllPages, payload);
}

/**
 * @param payload
 * */
export async function getAllTaxonomies(payload){
    await this.$axios.$get(api.getAllTaxonomies, payload);
}

/**
 * @param payload
 * */
export async function getAllCategories(payload){
    await this.$axios.$get(api.getAllCategories, payload);
}

/**
 * @param payload
 * */
export async function getAllImages(payload){
    await this.$axios.$get(api.getAllImages, payload);
}

/**
 * @param payload
 * */
export async function getAllTypes(payload){
    await this.$axios.$get(api.getAllTypes, payload);
}

/**
 * @param payload
 * */
export async function getAllUsers(payload){
    await this.$axios.$get(api.getAllUsers, payload);
}

/**
 * @param payload
 * */
export async function search(payload){
    await this.$axios.$get(api.search, payload);
}
