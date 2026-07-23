import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cafe Ordering API",
      version: "1.0.0",
      description: "QR Based Cafe Ordering Backend API",
    },

    servers: [
  {
    url:
      process.env.NODE_ENV === "production"
        ? "https://qr-cafe-backend-l3vi.onrender.com/api/v1"
        : "http://localhost:5000/api/v1",
  },
],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        // ================= Authentication =================

        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "admin@gmail.com",
            },
            password: {
              type: "string",
              example: "123",
            },
          },
        },

        // ================= Common Responses =================

        MessageResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Operation completed successfully",
            },
          },
        },

        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Something went wrong",
            },
          },
        },

        // ================= Category =================

        Category: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Beverages",
            },
            status: {
              type: "integer",
              example: 1,
            },
            created_at: {
              type: "string",
              example: "2026-07-23-15-30-25",
            },
            created_by: {
              type: "integer",
              example: 1,
            },
          },
        },

        CreateCategoryRequest: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Beverages",
            },
          },
        },

        UpdateCategoryRequest: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Snacks",
            },
            status: {
              type: "integer",
              example: 1,
            },
          },
        },
        // ================= Tables =================

        CreateTableRequest: {
          type: "object",
          required: ["created_by"],
          properties: {
            created_by: {
              type: "integer",
              example: 1,
              description: "ID of the user creating the table",
            },
          },
        },

        CreateTableResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            id: {
              type: "integer",
              example: 5,
            },
          },
        },

        Table: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            table_number: {
              type: "string",
              example: "T01",
            },
            qr_code: {
              type: "string",
              example: "data:image/png;base64,iVBOR...",
            },
            status: {
              type: "integer",
              example: 1,
            },
            created_by: {
              type: "integer",
              example: 1,
            },
          },
        },

        // ================= Menu =================

        Menu: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Veg Burger",
            },
            price: {
              type: "number",
              example: 149,
            },
            description: {
              type: "string",
              example: "Fresh veg burger with cheese",
            },
            category_id: {
              type: "integer",
              example: 2,
            },
            status: {
              type: "integer",
              example: 1,
            },
            created_at: {
              type: "string",
              example: "2026-07-23-15-30-25",
            },
            created_by: {
              type: "integer",
              example: 1,
            },
          },
        },

        CreateMenuRequest: {
          type: "object",
          required: ["name", "price", "description", "category_id"],
          properties: {
            name: {
              type: "string",
              example: "Veg Burger",
            },
            price: {
              type: "number",
              example: 149,
            },
            description: {
              type: "string",
              example: "Fresh veg burger with cheese",
            },
            category_id: {
              type: "integer",
              example: 2,
            },
          },
        },

        UpdateMenuRequest: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Cheese Burger",
            },
            price: {
              type: "number",
              example: 199,
            },
            description: {
              type: "string",
              example: "Extra cheese burger",
            },
            category_id: {
              type: "integer",
              example: 2,
            },
            status: {
              type: "integer",
              example: 1,
            },
          },
        },
        
        // ================= Orders =================

        AddOrderItemRequest: {
          type: "object",
          required: ["table_id", "items"],
          properties: {
            table_id: {
              type: "integer",
              example: 1,
            },
            items: {
              type: "array",
              items: {
                type: "object",
                required: ["menu_id", "quantity"],
                properties: {
                  menu_id: {
                    type: "integer",
                    example: 2,
                  },
                  quantity: {
                    type: "integer",
                    example: 3,
                  },
                },
              },
            },
          },
        },

        GenerateBillRequest: {
          type: "object",
          required: ["session_id"],
          properties: {
            session_id: {
              type: "integer",
              example: 5,
            },
          },
        },

        UpdateOrderTxnRequest: {
          type: "object",
          required: ["status"],
          properties: {
            status: {
              type: "integer",
              example: 4,
              description: "Transaction status",
            },
            menu_id: {
              type: "integer",
              example: 2,
            },
            quantity: {
              type: "integer",
              example: 2,
            },
            price: {
              type: "number",
              format: "float",
              example: 298,
            },
          },
        },

        Order: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            session_id: {
              type: "integer",
              example: 5,
            },
            order_number: {
              type: "string",
              example: "O001",
            },
            total_amount: {
              type: "number",
              format: "float",
              example: 549,
            },
            status: {
              type: "integer",
              example: 8,
            },
          },
        },
      },
    },
  },

  apis: ["./docs/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
