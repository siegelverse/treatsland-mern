import { createSelector } from 'reselect'; 

const COLLECTION_ID_MAP = {
    puch: 1, 
    honda: 2,
    peugoet: 3,
    parts: 4,
    apparel: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
)

export const selectCollection = createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)