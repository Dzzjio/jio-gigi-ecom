import { Link, useParams } from 'react-router-dom';
import Button from '../../components/UI/Button';
import { BuySection, ProductDetailContainer, ProductImage, ProductInfo } from './styled';

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
    );
  };
  
  export default ProductDetail;