import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Header, CartInfo } from './styles';
import Logo from '../../../../assets/shopping-cart.png';

import { useCart } from '../../../../hooks/useCart';

export default function Home() {
  const { cartItems } = useCart();
  const cartLength = cartItems?.length || 0;

  return (
    <Header>
      <Link to="/">
        <h1>
          <div>
            <img src={Logo} />
          </div>
          <div>
            <span>/Computer</span>
            <i>Shop/</i>
          </div>
        </h1>
      </Link>

      <CartInfo to={cartItems?.length > 0 ? '/cart' : '/'}>
        <p>Meu carrinho</p>
        <div>
          <span data-testid="cart-size">{cartLength}</span>
          <MdShoppingBasket size={36} color="white" />
        </div>
      </CartInfo>
    </Header>
  );
}
