import React from 'react';
import { IProduct } from '../../types';
import { formatValue } from '../../utils/formatValue';

const CartItems = (prop: any) => {

  const { items } = prop.response;

  return (
    <>
      {items.map((item: IProduct) => (
        <div id="item-content">
          <ul key={item.id}>
            <li>
              <div id="image-container">
                <img src={item.imageUrl} alt={item.name} /></div>
              <div id="description-container">
                <p className="title">{item.name}</p>
                <p className="small"> R$ {formatValue(item.price)}</p>
                <p className="price">R$ {formatValue(item.sellingPrice)}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default CartItems;