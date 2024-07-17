import { Link, useParams } from 'react-router-dom';
import { BorderBottom, BrandName, BuySection, ColorButton, ColorPicker, Container, Content, FavoriteButton, Flex, FlexWrapper, Img, Price, ProductDescription, ProductDetailContainer, ProductImage, ProductInfo, ProductTitle, ReviewCount, ReviewText, Section, SelectIcon, SizePicker, SizeSelect, SocialLink } from './styled';
import Button from '../../components/UI/Button';
import { StarIcon } from 'lucide-react';

interface ProductI {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
  }
  
  const products: ProductI[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', description: 'A high-performance laptop', image: '/path/to/laptop.jpg' },
    { id: 2, name: 'T-Shirt', category: 'Clothing', description: 'A stylish t-shirt', image: '/path/to/tshirt.jpg' },
    { id: 3, name: 'Watch', category: 'Accessories', description: 'A trendy watch', image: '/path/to/watch.jpg' },
    // Add more products here
  ];
  
  const ProductDetail: React.FC = () => {
    const { productId } = useParams<{ productId?: string }>();
  
    //FIXME
    // Ensure productId is defined and convert to number
    const product = productId ? products.find(p => p.id === parseInt(productId)) : undefined;
  
    if (!product) {
      return <p>Product not found</p>;
    }
  
    return (
      <ProductDetailContainer>
        <ProductImage>
          <img src={product.image} alt={product.name} />
        </ProductImage>
        <ProductInfo>
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
          <BuySection>
            <Button>Add to Cart</Button>
            <Button><Link to='/checkout'>Buy Now</Link></Button>
          </BuySection>
        </ProductInfo>
      </ProductDetailContainer>

    //   <Section>
    //   <Container>
    //     <FlexWrapper>
    //       <Img alt="ecommerce" src="https://dummyimage.com/400x400" />
    //       <Content>
    //         <BrandName>BRAND NAME</BrandName>
    //         <ProductTitle>The Catcher in the Rye</ProductTitle>
    //         <Flex>
    //           <span>
    //             <StarIcon viewBox="0 0 24 24">
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //             </StarIcon>
    //             <StarIcon viewBox="0 0 24 24">
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //             </StarIcon>
    //             <StarIcon viewBox="0 0 24 24">
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //             </StarIcon>
    //             <StarIcon viewBox="0 0 24 24">
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //             </StarIcon>
    //             <StarIcon viewBox="0 0 24 24">
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //             </StarIcon>
    //             <ReviewText>4 Reviews</ReviewText>
    //           </span>
    //           <ReviewCount>
    //             <SocialLink href="#">
    //               <svg viewBox="0 0 24 24">
    //                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    //               </svg>
    //             </SocialLink>
    //             <SocialLink href="#">
    //               <svg viewBox="0 0 24 24">
    //                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    //               </svg>
    //             </SocialLink>
    //             <SocialLink href="#">
    //               <svg viewBox="0 0 24 24">
    //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    //               </svg>
    //             </SocialLink>
    //           </ReviewCount>
    //         </Flex>
    //         <ProductDescription>
    //           Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
    //         </ProductDescription>
    //         <BorderBottom>
    //           <ColorPicker>
    //             <span>Color</span>
    //             <ColorButton />
    //             <ColorButton color="#4a5568" />
    //             <ColorButton color="#667eea" />
    //           </ColorPicker>
    //           <SizePicker>
    //             <span>Size</span>
    //             <SizeSelect>
    //               <option>SM</option>
    //               <option>M</option>
    //               <option>L</option>
    //               <option>XL</option>
    //             </SizeSelect>
    //             <SelectIcon>
    //               <svg viewBox="0 0 24 24">
    //                 <path d="M6 9l6 6 6-6" />
    //               </svg>
    //             </SelectIcon>
    //           </SizePicker>
    //         </BorderBottom>
    //         <Flex>
    //           <Price>$58.00</Price>
    //           <Button>Button</Button>
    //           <FavoriteButton>
    //             <svg viewBox="0 0 24 24">
    //               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    //             </svg>
    //           </FavoriteButton>
    //         </Flex>
    //       </Content>
    //     </FlexWrapper>
    //   </Container>
    // </Section>
    );
  };
  
  export default ProductDetail;