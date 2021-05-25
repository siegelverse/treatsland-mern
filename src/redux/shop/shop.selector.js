import { createSelector } from 'reselect'; 

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collection => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)