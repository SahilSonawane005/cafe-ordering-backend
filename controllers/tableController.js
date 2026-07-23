import {
  getTableService,
  getTableByIdService,
  createtableService,
  updatetableService,
  deletetableService,
  tSessionService,
} from "../services/tableService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const getTables = asyncHandler(async (req, res) => {
  const tables = await getTableService();
  res.json(tables);
});

export const getTableById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const table = await getTableByIdService(id);
  if (!table) {
    return res.status(404).json({ message: "Table not found" });
  }
  res.json(table);
});

export const createtable = asyncHandler(async (req, res) => {
  const table = req.body;

  const newTableId = await createtableService(table);

  res.status(201).json({
    success: true,
    id: newTableId,
  });
});
export const updatetable = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const table = req.body;
  const success = await updatetableService(id, table);
  if (!success) {
    return res.status(404).json({ message: "Table not found" });
  }
  res.json({ message: "Table updated successfully" });
});

export const deletetable = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await deletetableService(id);
  if (!success) {
    return res.status(404).json({ message: "Table not found" });
  }
  res.json({ message: "Table deleted successfully" });
});

export const tSession = asyncHandler(async (req, res) => {
  const { table_id } = req.body;
  const success = await tSessionService(table_id);
  if (!success) {
    return res.status(400).json({ message: "Failed to create session" });
  } 

  res.json({ message: `Session created for table ${table_id}` });
});

