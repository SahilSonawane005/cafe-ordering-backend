/**
 * @swagger
 * tags:
 *   - name: Menu
 *     description: Menu Management APIs
 */

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Get All Menu Items
 *     description: Fetch all active menu items.
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: Menu fetched successfully
 */

/**
 * @swagger
 * /menu/{id}:
 *   get:
 *     summary: Get Menu By ID
 *     description: Fetch a menu item by its ID.
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Menu fetched successfully
 *       404:
 *         description: Menu not found
 */

/**
 * @swagger
 * /menu/add:
 *   post:
 *     summary: Create Menu Item
 *     description: Add a new menu item.
 *     tags: [Menu]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateMenuRequest'
 *     responses:
 *       201:
 *         description: Menu item created successfully
 */

/**
 * @swagger
 * /menu/{id}:
 *   put:
 *     summary: Update Menu Item
 *     description: Update an existing menu item.
 *     tags: [Menu]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateMenuRequest'
 *     responses:
 *       200:
 *         description: Menu updated successfully
 *       404:
 *         description: Menu not found
 */

/**
 * @swagger
 * /menu/{id}:
 *   delete:
 *     summary: Delete Menu Item
 *     description: Soft delete a menu item.
 *     tags: [Menu]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Menu deleted successfully
 *       404:
 *         description: Menu not found
 */