import React, { useEffect, useState } from "react";
import productStore from "../../stores/Product.store";
import productServices from "../../services/ProductServices";
import ItemCard from "../../components/UI/ItemCard/ItemCard";
import ShoppingFilters from "../../components/UI/ShopFilters/shopFilters";

const Shop: React.FC = () => {
  const { setProducts, setLoadingProducts, products } = productStore(state => ({
    setProducts: state.setProducts,
    setLoadingProducts: state.setLoadingProducts,
    products: state.products
  }));

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const response = await productServices.allProducts();
        const productsData = response.data.products; // Extract the products array
        console.log('Fetched products:', productsData); // Log the extracted products array
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
    console.log('Category changed to:', categoryName); // Log the category name when changed
    setSelectedCategory(categoryName);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => {
        console.log('Product category_name:', product.category_name); // Log product category name
        console.log('Selected category name:', selectedCategory); // Log selected category name
        return product.category_name === selectedCategory;
      })
    : products;

  return (
    <div>
      <h1>Shop</h1>
      <ShoppingFilters onCategoryChange={handleCategoryChange} />
      <ItemCard products={filteredProducts} />
    </div>
  );
};

export default Shop;
