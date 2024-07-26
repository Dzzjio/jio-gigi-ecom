import React, { useEffect, useState } from "react";
import categoryStore from "../../../stores/Category.store";
import categoryServices from "../../../services/CategoryServices";
import { CategoryI } from "../../../types/category.interface";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FilterContainer, StyledSelect, PriceSliderContainer, SliderLabel } from "./styled";

interface ShoppingFiltersProps {
  onCategoryChange: (categoryName: string) => void;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
  selectedCategory: string;
}

const ShoppingFilters: React.FC<ShoppingFiltersProps> = ({ onCategoryChange, onPriceChange, selectedCategory }) => {
  const { categories, setCategories, setLoadingCategories } = categoryStore(state => ({
    categories: state.categories,
    setCategories: state.setCategories,
    loadingCategories: state.loadingCategories,
    setLoadingCategories: state.setLoadingCategories
  }));

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

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

  useEffect(() => {
    // Load saved filters from local storage
    const savedCategory = localStorage.getItem('selectedCategory') || "";
    const savedMinPrice = Number(localStorage.getItem('minPrice')) || 0;
    const savedMaxPrice = Number(localStorage.getItem('maxPrice')) || 5000;

    setPriceRange([savedMinPrice, savedMaxPrice]);
    onCategoryChange(savedCategory);
    onPriceChange(savedMinPrice, savedMaxPrice);
  }, [onCategoryChange, onPriceChange]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryName = event.target.value;
    console.log('Selected category name:', categoryName); // Log the selected category name
    localStorage.setItem('selectedCategory', categoryName);
    onCategoryChange(categoryName);
  };

  const handlePriceChange = (value: number | [number, number]) => {
    if (Array.isArray(value)) {
      const [minPrice, maxPrice] = value;
      setPriceRange(value);
      localStorage.setItem('minPrice', minPrice.toString());
      localStorage.setItem('maxPrice', maxPrice.toString());
      onPriceChange(minPrice, maxPrice);
    }
  };

  return (
    <FilterContainer>
      <StyledSelect onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((category: CategoryI) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </StyledSelect>
      <PriceSliderContainer>
        <SliderLabel>Price Range: ${priceRange[0]} - ${priceRange[1]}</SliderLabel>
        <Slider
          range
          min={0}
          max={5000}
          step={1}
          value={priceRange}
          onChange={handlePriceChange as (value: number | number[]) => void} // Cast to appropriate type
        />
      </PriceSliderContainer>
    </FilterContainer>
  );
};

export default ShoppingFilters;
