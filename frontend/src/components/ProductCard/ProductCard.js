import React from 'react';
import Card from "../UI/Card/Card";


// Компонент, который рисует карточку для фильма: постер, название и ссылку,
// используя компонент UI/Card (карточка), основанный на стилях bootstrap.
const ProductCard = props => {
    const {product, onDelete, className} = props;

    // достаём данные из movie
    const {name,  photos, id} = product;

    // создаём объект с данными (текстом и url) для ссылки
    const link = {
        text: 'Read more',
        url: '/products/' + id
    };


    // возвращаем (рисуем) карточку с данными из movie и ссылкой.
    return <Card header={name} image={photos} link={link} click={onDelete} className='h-100'/>;
};


export default ProductCard;