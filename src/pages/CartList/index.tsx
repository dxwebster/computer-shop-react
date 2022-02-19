import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';
import EmptyMessage from '../../components/EmptyMessage';

import { Container, Content } from './styles';
import { useCart } from '../../hooks/useCart';

export default function CartList() {
  const { cartItems } = useCart();

  const navigate = useNavigate();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <Content>
          <ItemsList showControlers={true} />
          <SumInfo />
          <Button
            isProgressive={false}
            onClick={() => navigate('/cart/payment', { replace: true })}
          >
            Seguir para o pagamento
          </Button>
        </Content>
      ) : (
        <EmptyMessage />
      )}
    </Container>
  );
}
