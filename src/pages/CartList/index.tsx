import React from 'react';

import ButtonNavigation from '../../components/ButtonNavigation';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';
import EmptyMessage from '../../components/EmptyMessage';

import { Container, Content } from './styles';
import { useCart } from '../../hooks/useCart';

export default function CartList() {
  const { cartItems } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <Content>
          <ItemsList showControlers={true} />
          <SumInfo />
          <ButtonNavigation title="Seguir para o pagamento" navigation="/cart/payment" />
        </Content>
      ) : (
        <EmptyMessage />
      )}
    </Container>
  );
}
