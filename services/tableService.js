import {
  getTablesdb,
  getTableByIddb,
  createtabledb,
  updatetabledb,
  deletetabledb,
  getLastTableNumber,
  tSessiondb,
} from "../repositories/tableRepo.js";
import QRCode from "qrcode";
export const getTableService = async () => {
  const tables = await getTablesdb();
  return tables;
};

export const getTableByIdService = async (id) => {
  const table = await getTableByIddb(id);
  return table;
};

export const createtableService = async (table) => {
  const { created_by } = table;

  const lastTable = await getLastTableNumber();

  let nextNumber = 1;

  if (lastTable) {
    const num = parseInt(lastTable.replace("T", ""));
    nextNumber = num + 1;
  }
  const table_number = `T${String(nextNumber).padStart(2, "0")}`;

  const qrData = `http://localhost:5000/menu?table=${table_number}`;

  const qrCodeImage = await QRCode.toDataURL(qrData);

  const newTableId = await createtabledb({
    table_number,
    qr_code: qrCodeImage,
    created_by,
  });

  return newTableId;
};

export const updatetableService = async (id, table) => {
  const success = await updatetabledb(id, table);
  return success;
};

export const deletetableService = async (id) => {
  const success = await deletetabledb(id);
  return success;
};

export const tSessionService = async (table_id) => {
  const success = await tSessiondb(table_id);
  return success;
};
