/**
 * @swagger
 * tags:
 *   - name: Tables
 *     description: Table Management APIs
 */

/**
 * @swagger
 * /tables:
 *   get:
 *     summary: Get All Tables
 *     description: Fetch all cafe tables.
 *     tags: [Tables]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tables fetched successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /tables/{id}:
 *   get:
 *     summary: Get Table By ID
 *     description: Fetch a table using its ID.
 *     tags: [Tables]
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
 *         description: Table fetched successfully
 *       404:
 *         description: Table not found
 */

/**
 * @swagger
 * /tables/add:
 *   post:
 *     summary: Create Table
 *     description: Creates a new table. Table number, QR code and status are generated automatically.
 *     tags: [Tables]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTableRequest'
 *     responses:
 *       201:
 *         description: Table created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateTableResponse'
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /tables/{id}:
 *   put:
 *     summary: Update Table
 *     description: Update an existing table.
 *     tags: [Tables]
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
 *     responses:
 *       200:
 *         description: Table updated successfully
 *       404:
 *         description: Table not found
 */

/**
 * @swagger
 * /tables/{id}:
 *   delete:
 *     summary: Delete Table
 *     description: Delete a table by ID.
 *     tags: [Tables]
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
 *         description: Table deleted successfully
 *       404:
 *         description: Table not found
 */

/**
 * @swagger
 * /tables/session:
 *   post:
 *     summary: Create Table Session
 *     description: Start a new dining session for a table.
 *     tags: [Tables]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Table session created successfully
 *       400:
 *         description: Invalid request
 */
