import React from 'react';
import { default as CollectionItem } from '../../components/collection-item/collection-item.component';
import './category.styles.scss';

const CategoryPage = ({ match }) => (
    <div className='category'>
        <h2>{ match }</h2>
    </div>
);

export default CategoryPage;
