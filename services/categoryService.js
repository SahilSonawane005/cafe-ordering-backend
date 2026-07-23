import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../repositories/categoryRepo.js";

export const getAllCategoriesService = async () => {
  const categories = await getAllCategories();
  return categories;
};

export const createCategoryService = async (name, created_by) => {
  const category = await createCategory(name, created_by || null);
  return category;
};

export const getCategoryByIdService = async (id) => {
  const category = await getCategoryById(id);
  return category;
};

export const updateCategoryService = async (id, name, status) => {
  const updatedCategory = await updateCategory(id, name, status);
  return updatedCategory;
};
export const deleteCategoryService = async (id) => {
  const deleted = await deleteCategory(id);
  return deleted;
};
