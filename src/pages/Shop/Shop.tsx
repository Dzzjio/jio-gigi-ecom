// import ItemCard from "../../components/UI/ItemCard/ItemCard";
// import buki from '../../assets/Images/bukkkaa.jpg';
// import shirt1 from '../../assets/Images/shirt1.jpg';
// import { StyledShopFilters, StyledShopMain, StyledShopPage } from "./styled";

import { useState } from 'react';
import { FilterButton, FilterContainer, ProductCard, ProductGrid, ShopContainer } from './styled';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];
    const products = [
      { id: 1, name: 'Laptop', category: 'Electronics', description: 'A high-performance laptop', image: '/path/to/laptop.jpg' },
      { id: 2, name: 'T-Shirt', category: 'Clothing', description: 'A stylish t-shirt', image: '/path/to/tshirt.jpg' },
      { id: 3, name: 'Watch', category: 'Accessories', description: 'A trendy watch', image: '/path/to/watch.jpg' },
      // Add more products here
    ];
  
    const filteredProducts = selectedCategory === 'All' 
      ? products 
      : products.filter(product => product.category === selectedCategory);
  
    return (
      <ShopContainer>
        <h1>Shop</h1>
        <FilterContainer>
          {categories.map(category => (
            <FilterButton 
              key={category} 
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id}>
              <Link to={`/product/${product.id}`}>
                <p>{product.name}</p>
                <p>{product.category}</p>
              </Link>
            </ProductCard>
          ))}
        </ProductGrid>
      </ShopContainer>
    );
  };
  
  export default Shop;