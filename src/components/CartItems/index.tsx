import React from 'react';
import { IProduct } from '../../types';

const CartItems = (prop: any) => {

  const { items } = prop.response;

  const parsedValue = (n: number) => {
    const dividedN = n / 100;
    const result = dividedN.toFixed(2).replace('.', ',');

    return result;
  }

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
                <p className="small"> R$ {parsedValue(item.price)}</p>
                <p className="price">R$ {parsedValue(item.sellingPrice)}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default CartItems;