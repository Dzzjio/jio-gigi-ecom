import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductI } from '../../types/product.interface';
import productServices from '../../services/ProductServices';
import cartProductStore from '../../stores/Cart.store';
import { Container, Description, Image, Price, SalePrice, Title, ButtonContainer, AddToCartButton } from './styled';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductI | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const addCartProduct = cartProductStore((state) => state.addCartProduct);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('No product ID provided');
        setLoading(false);
        return;
      }

      try {
        const response = await productServices.getProduct(id);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartProduct = {
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: "",
        id: product.id,
        product_id: product.id,
        cartProduct: product,
        count: 1,
      };

      addCartProduct(cartProduct);
    }
  };

  const handleGoToCheckout = () => {
    if (product) {
      handleAddToCart(); // Ensure the product is added to the cart
      navigate('/checkout');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      {product ? (
        <div>
          <Title>{product.title}</Title>
          <Image src={product.image} alt={product.title} />
          <Description>{product.description}</Description>
          <Price>Price: ${product.price}</Price>
          {product.salePrice && <SalePrice>Sale Price: ${product.salePrice}</SalePrice>}
          <ButtonContainer>
            <AddToCartButton onClick={handleAddToCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256" />
                <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
              </svg>
              Add to Cart
            </AddToCartButton>
            <button onClick={handleGoToCheckout}>Go to Checkout</button>
          </ButtonContainer>
        </div>
      ) : (
        <Container>Product not found</Container>
      )}
    </Container>
  );
};

export default ProductDetail;
