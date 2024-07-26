import { useEffect } from "react";
import productStore from "../../stores/Product.store";
import productServices from "../../services/ProductServices";
import ItemCard from "../../components/UI/ItemCard/ItemCard";

const Shop: React.FC = () => {
  const { setProducts, setLoadingProducts } = productStore(state => ({
    setProducts: state.setProducts,
    setLoadingProducts: state.setLoadingProducts
  }));

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

  return (
    <div>
      <h1>Shop</h1>
      <ItemCard />
    </div>
  );
};

export default Shop;
