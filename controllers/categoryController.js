import { asyncHandler } from "../utils/asyncHandler.js";
import {
  getAllCategoriesService,
  createCategoryService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/categoryService.js";

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await getAllCategoriesService();
  res.status(200).json({
    success: true,
    message: "Categories retrieved successfully",
    data: categories,
  });
});

export const createCategory = asyncHandler(async (req, res) => {
  const { name, created_by } = req.body;
  const category = await createCategoryService(name, created_by);
  res.status(201).json({
    success: true,
    data: category,
  });
});
export const getCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await getCategoryByIdService(id);
  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});

export const updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, status } = req.body;
  const updatedCategory = await updateCategoryService(id, name, status);
  if (!updatedCategory) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }
  res.status(200).json({
    success: true,
    data: updatedCategory,
  });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await deleteCategoryService(id);
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Category deleted",
  });
});
