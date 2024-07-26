import React, { useEffect } from "react";
import categoryStore from "../../../stores/Category.store";
import categoryServices from "../../../services/CategoryServices";
import { CategoryI } from "../../../types/category.interface";

interface ShoppingFiltersProps {
  onCategoryChange: (categoryName: string) => void;
}

const ShoppingFilters: React.FC<ShoppingFiltersProps> = ({ onCategoryChange }) => {
  const { categories, setCategories, setLoadingCategories } = categoryStore(state => ({
    categories: state.categories,
    setCategories: state.setCategories,
    loadingCategories: state.loadingCategories,
    setLoadingCategories: state.setLoadingCategories
  }));

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const response = await categoryServices.allCategories();
        const categoriesData = response.data; // Extract the categories array
        setCategories(categoriesData); // Update the store with the array of categories
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [setCategories, setLoadingCategories]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryName = event.target.value;
    console.log('Selected category name:', categoryName); // Log the selected category name
    onCategoryChange(categoryName); // Pass the selected category name to the parent
  };

  return (
    <div className="filter-container">
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category: CategoryI) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShoppingFilters;
