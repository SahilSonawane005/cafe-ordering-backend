/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get All Users
 *     description: Fetch all registered users.
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users fetched successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: User registered successfully
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /users/refresh:
 *   post:
 *     summary: Refresh Access Token
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Token refreshed
 */

/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: Logout User
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 */
