import React from 'react';
import { default as CollectionItem } from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import './category.styles.scss';

const CategoryPage = ({ collection }) => (
    <div className='category'>
        <h2>{ collection }</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)

})

export default CategoryPage;
