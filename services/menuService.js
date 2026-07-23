import {
  getMenuFromDB,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
} from "../repositories/menuRepo.js";

export const getMenu = async () => {
  return await getMenuFromDB();
};

export const getMenuByIdService = async (id) => {
  return await getMenuById(id);
};
export const createMenuService = async (
  name,
  price,
  description,
  category_id,
  created_by,
) => {
  return await createMenu(
    name,
    price,
    description,
    category_id,
    created_by || null,
  );
};

export const updateMenuService = async (
  id,
  name,
  price,
  description,
  category_id,
  status,
) => {
  if (status === undefined) {
    if (!name || !price || !description || !category_id) {
      throw new Error(
        "name, price, description, category_id are required when status is not provided",
      );
    }
  }

  return await updateMenu(id, name, price, description, category_id, status);
};

export const deleteMenuService = async (id) => {
  return await deleteMenu(id);
};
