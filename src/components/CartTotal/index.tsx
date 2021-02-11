import React from 'react';
import { formatValue } from '../../utils/formatValue';

const CartTotal = (prop: any) => {

  const { items } = prop.response;

  const total = items.reduce(function (prev: any, cur: any) {
    return prev + cur.sellingPrice;
  }, 0)

  return (
    <>
      <div id="total-text">
        <p>Total</p>
        <p>R$ {formatValue(total)}</p>
      </div>
      {total >= 1000 ? <div id="free-shipping"><p>Parabéns, sua compra tem frete grátis!</p></div> : null}
    </>
  )
}

export default CartTotal;