import React from 'react';
import Item from './Item';

const itemList = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
};

export default itemList;