import { Link } from "react-router-dom";
import { ProductI } from "../../../types/product.interface";
import cartProductStore from "../../../stores/Cart.store";
import { StyledItemCard } from "./styled";
import { CartProductI } from "../../../types/cart.interface";

interface ItemCardProps {
  products: ProductI[];
}

const ItemCard: React.FC<ItemCardProps> = ({ products }) => {
  const addCartProduct = cartProductStore(state => state.addCartProduct);

  const handleAddToCart = (product: ProductI) => {
    const cartProduct: CartProductI = {
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      user_id: "", // Replace with actual user ID if necessary
      id: product.id,
      product_id: product.id,
      cartProduct: product,
      count: 1
    };

    console.log('Adding to cart:', cartProduct);
    addCartProduct(cartProduct);
  };

  return (
    <StyledItemCard>
      <div className="products">
        {products.map((product: ProductI) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              {product.salePrice && <p className="sale-price">Sale Price: ${product.salePrice}</p>}
              <div className="buttons">
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                    <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                    <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256"/>
                    <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                  </svg>
                </button>
                <Link to={`/product/${product.id}`} className="buy-now">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                    <path d="M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                    <path d="M384 160a32 32 0 1132-32 32 32 0 01-32 32z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledItemCard>
  );
};

export default ItemCard;
