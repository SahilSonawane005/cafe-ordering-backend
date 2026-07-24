/**
 * @swagger
 * tags:
 *   - name: Orders
 *     description: Order Management APIs
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get All Orders
 *     description: Fetch all generated orders.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Orders fetched successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /orders/add-item:
 *   post:
 *     summary: Add Items To Order
 *     description: Creates a table session automatically if one does not exist and adds menu items to the current order transaction.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddOrderItemRequest'
 *     responses:
 *       201:
 *         description: Order items added successfully
 *       400:
 *         description: Invalid request
 */

/**
 * @swagger
 * /orders/generate-bill:
 *   post:
 *     summary: Generate Final Bill
 *     description: Generates the final order, assigns an order number and closes the table session.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GenerateBillRequest'
 *     responses:
 *       200:
 *         description: Bill generated successfully
 *       404:
 *         description: Session not found
 */

/**
 * @swagger
 * /orders/txn/{txn_id}:
 *   put:
 *     summary: Update Order Transaction
 *     description: Update transaction status or modify menu, quantity or price.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: txn_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 15
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateOrderTxnRequest'
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 *       404:
 *         description: Transaction not found
 */