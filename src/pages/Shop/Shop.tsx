import React, { useEffect, useState } from "react";
import productStore from "../../stores/Product.store";
import productServices from "../../services/ProductServices";
import ItemCard from "../../components/UI/ItemCard/ItemCard";
import ShoppingFilters from "../../components/UI/ShopFilters/shopFilters";
import { ShopContainer } from "./styled";

const Shop: React.FC = () => {
  const { setProducts, setLoadingProducts, products } = productStore(state => ({
    setProducts: state.setProducts,
    setLoadingProducts: state.setLoadingProducts,
    products: state.products
  }));

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const response = await productServices.allProducts();
        const productsData = response.data.products; // Extract the products array
        setProducts(productsData); // Update the store with the array of products
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [setProducts, setLoadingProducts]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    setPriceRange({ min: minPrice, max: maxPrice });
  };

  const filteredProducts = products.filter(product => {
    const withinPriceRange = product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesCategory = selectedCategory ? product.category_name === selectedCategory : true;
    return withinPriceRange && matchesCategory;
  });

  return (
    <ShopContainer>
      <ShoppingFilters
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
        selectedCategory={selectedCategory}
      />
      <ItemCard products={filteredProducts} />
    </ShopContainer>
  );
};

export default Shop;
