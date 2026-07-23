/**
 * @swagger
 * tags:
 *   - name: Categories
 *     description: Category Management APIs
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get All Categories
 *     description: Fetch all active categories. Results may be served from Redis cache.
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Categories fetched successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Get Category By ID
 *     description: Fetch a category by its ID.
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Category fetched successfully
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /category/add:
 *   post:
 *     summary: Create Category
 *     description: Create a new category.
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCategoryRequest'
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid request
 */

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Update Category
 *     description: Update an existing category.
 *     tags: [Categories]
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
 *             $ref: '#/components/schemas/UpdateCategoryRequest'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Delete Category
 *     description: Soft delete a category by setting its status to 2.
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */