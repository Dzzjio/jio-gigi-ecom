import { AddCategoryDto } from "../types/category.interface";
import { addProductDto } from "../types/product.interface";
import api from "../utils/api";

const categoryServices = {
  allCategories: () => api.get("product-category"),
  addCategory: (category: AddCategoryDto) =>
    api.post("product-category", { image: "", ...category }),
  addCategories: (Categories: addProductDto[]) => api.post("product-category/many", Categories),
  deleteCategory: (id: string) => api.delete(`product-category/${id}`),
  deleteAllCategories: () => api.delete("product-category/delete-all"),
};

export default categoryServices;