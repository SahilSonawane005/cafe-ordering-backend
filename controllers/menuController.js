import { getMenu,getMenuByIdService,createMenuService,deleteMenuService,updateMenuService } from "../services/menuService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const getMenuController = asyncHandler(async (req, res) => {
  const menu = await getMenu();

  res.status(200).json({
    success: true,
    data: menu,
  });
});

export const createMenu = asyncHandler(async (req, res) => {
  const { name, price, description, category_id } = req.body;
  const created_by = null;
    const menu = await createMenuService(name, price, description, category_id, created_by);
    res.status(201).json({
    success: true,
    data: menu.rows[0],
  });
});

export const getMenuById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const menu = await getMenuByIdService(id);
    if (!menu) {
    return res.status(404).json({
      success: false,
      message: "Menu not found",
    });
  }
    res.status(200).json({
    success: true,
    data: menu,
  });
});

export const updateMenu = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category_id, status } = req.body;

  const menu = await updateMenuService(
    id,
    name,
    price,
    description,
    category_id,
    status
  );

  if (!menu) {
    return res.status(404).json({
      success: false,
      message: "Menu not found or could not be updated",
    });
  }

  res.status(200).json({
    success: true,
    data: menu,
  });
});

export const deleteMenu = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const menu = await deleteMenuService(id);
    if (!menu) {
    return res.status(404).json({
        success: false,
        message: "Menu not found or could not be deleted",
    });
  }
    res.status(200).json({
    success: true,
    data: menu,
  });
}
);
