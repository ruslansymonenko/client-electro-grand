# API Endpoints Documentation

## Overview

Documentation of all HTTP API endpoints used in the Elektro Grand client application. All endpoints connect to an external backend service.

## Base Configuration

- **Base URL**: `${NEXT_PUBLIC_SERVER_URL}/backend`
- **Data Format**: JSON
- **Authentication**: Bearer JWT tokens

## Internal Next.js API Routes

### POST /api/verify-token

JWT token validation.

**Controller**: `src/app/api/verify-token/route.ts`

**Request**:

```bash
curl -X POST http://localhost:3000/api/verify-token \
  -H "Content-Type: application/json" \
  -d '{"token": "your-jwt-token"}'
```

**Example Response**:

```json
{
  "valid": true,
  "message": "Token is valid"
}
```

**Models**: JWT token from environment variable `NEXT_PUBLIC_STAFF_KEY`

---

## External API Endpoints

### Authentication

#### POST /auth/login

User authentication.

**Service**: `authService.login()`  
**File**: `src/services/auth/auth.service.ts`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**Example Response**:

```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2023-01-01T00:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Models**: `IUser`, `IAuthResponse`

#### POST /auth/login-admin

Administrator authentication.

**Service**: `authService.loginAdmin()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/auth/login-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123"
  }'
```

**Models**: `IUser`, `IAuthResponse`

#### POST /auth/register

Register a new user.

**Service**: `authService.register()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newuser@example.com",
    "password": "password123",
    "name": "New User"
  }'
```

**Models**: `IUser`, `IAuthResponse`

#### POST /auth/access-token

Refresh access token.

**Service**: `authService.getNewTokens()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/auth/access-token \
  -H "Content-Type: application/json"
```

**Models**: `IAuthResponse`

#### POST /auth/logout

Logout from the system.

**Service**: `authService.logout()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/auth/logout \
  -H "Content-Type: application/json"
```

**Example Response**:

```json
true
```

---

### Products

#### GET /product

Get all products with pagination.

**Service**: `productService.getAll()`  
**File**: `src/services/products/products.service.ts`

**Request**:

```bash
curl -X GET "${SERVER_URL}/backend/product?page=1&limit=10" \
  -H "Content-Type: application/json"
```

**Example Response**:

```json
{
  "products": [
    {
      "id": 1,
      "name": "iPhone 14",
      "slug": "iphone-14",
      "description": "Latest iPhone model",
      "price": 999.99,
      "images": ["image1.jpg", "image2.jpg"],
      "categoryId": 1,
      "subcategoryId": 1,
      "brandId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "category": {
        "id": 1,
        "name": "Smartphones",
        "slug": "smartphones",
        "image": "category.jpg"
      },
      "subcategory": {
        "id": 1,
        "name": "iOS Phones",
        "slug": "ios-phones",
        "categoryId": 1,
        "image": "subcategory.jpg"
      },
      "brand": {
        "id": 1,
        "name": "Apple",
        "slug": "apple",
        "image": "brand.jpg"
      }
    }
  ],
  "totalProducts": 100,
  "totalPages": 10,
  "currentPage": 1
}
```

**Models**: `IProductResponseWithPagination`

#### GET /product/by-id/{id}

Get product by ID.

**Service**: `productService.getById()`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/product/by-id/1 \
  -H "Content-Type: application/json"
```

**Models**: `IProductDataResponse`

#### GET /product/by-slug/{slug}

Get product by slug.

**Service**: `productService.getBySlug()`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/product/by-slug/iphone-14 \
  -H "Content-Type: application/json"
```

**Модели**: `IProductDataResponse`

#### GET /product/by-category/{slug}

Get products by category.

**Service**: `productService.getByCategory()`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/product/by-category/smartphones \
  -H "Content-Type: application/json"
```

**Models**: `IProductResponseWithPagination`

#### GET /product/by-subcategory/{slug}

Get products by subcategory.

**Service**: `productService.getBySubcategory()`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/product/by-subcategory/ios-phones \
  -H "Content-Type: application/json"
```

**Models**: `IProductResponseWithPagination`

#### GET /product/by-brand/{slug}

Get products by brand.

**Service**: `productService.getByBrand()`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/product/by-brand/apple \
  -H "Content-Type: application/json"
```

**Models**: `IProductResponseWithPagination`

#### POST /product (Private)

Create a new product.

**Service**: `productService.create()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/product \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token" \
  -d '{
    "name": "New Product",
    "description": "Product description",
    "price": 299.99,
    "categoryId": 1,
    "subcategoryId": 1,
    "brandId": 1
  }'
```

**Models**: `ICreateProductData`, `IProductResponse`

#### PUT /product/{id} (Private)

Update a product.

**Service**: `productService.update()`

**Request**:

```bash
curl -X PUT ${SERVER_URL}/backend/product/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token" \
  -d '{
    "name": "Updated Product Name",
    "price": 399.99
  }'
```

**Models**: `IUpdateProductData`, `IProductResponse`

#### PUT /product/set-images/{id} (Private)

Upload product images.

**Service**: `productService.setImages()`

**Request**:

```bash
curl -X PUT ${SERVER_URL}/backend/product/set-images/1 \
  -H "Authorization: Bearer your-jwt-token" \
  -F "files=@image1.jpg" \
  -F "files=@image2.jpg"
```

**Models**: `TypeProductsImages`, `IProductResponse`

#### DELETE /product/{id} (Private)

Delete a product.

**Сервис**: `productService.delete()`

**Запрос**:

```bash
curl -X DELETE ${SERVER_URL}/backend/product/1 \
  -H "Authorization: Bearer your-jwt-token"
```

**Models**: `IProduct`

---

### Categories

#### GET /category

Get all categories.

**Service**: `categoriesService.getAll()`  
**File**: `src/services/categories/categories.service.ts`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/category \
  -H "Content-Type: application/json"
```

**Example Response**:

```json
[
  {
    "id": 1,
    "name": "Electronics",
    "slug": "electronics",
    "image": "electronics.jpg",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "subcategories": [
      {
        "id": 1,
        "name": "Smartphones",
        "slug": "smartphones",
        "categoryId": 1,
        "image": "smartphones.jpg"
      }
    ]
  }
]
```

**Models**: `ICategoryResponse[]`

#### GET /category/by-id/{id}

Get category by ID.

**Service**: `categoriesService.getById()`

**Models**: `ICategoryResponse`

#### GET /category/by-slug/{slug}

Get category by slug.

**Service**: `categoriesService.getBySlug()`

**Models**: `ICategoryResponse`

#### POST /category (Private)

Create a new category.

**Сервис**: `categoriesService.create()`

**Запрос**:

```bash
curl -X POST ${SERVER_URL}/backend/category \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token" \
  -d '{
    "name": "New Category"
  }'
```

**Models**: `ICreateCategoryData`, `ICategoryResponse`

#### PUT /category/{id} (Private)

Update a category.

**Service**: `categoriesService.update()`

**Models**: `IUpdateCategoryData`, `ICategory`

#### DELETE /category/{id} (Private)

Delete a category.

**Service**: `categoriesService.delete()`

**Models**: `ICategory`

---

### Subcategories

#### GET /subcategory

Get all subcategories.

**Service**: `subcategoriesService.getAll()`  
**File**: `src/services/subcategories/subcategories.service.ts`

**Models**: `ISubcategoryResponse[]`

#### GET /subcategory/by-id/{id}

Get subcategory by ID.

**Service**: `subcategoriesService.getById()`

**Models**: `ISubcategoryResponse`

#### GET /subcategory/by-slug/{slug}

Get subcategory by slug.

**Service**: `subcategoriesService.getBySlug()`

**Models**: `ISubcategoryResponse`

#### POST /subcategory (Private)

Create a new subcategory.

**Service**: `subcategoriesService.create()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/subcategory \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token" \
  -d '{
    "name": "New Subcategory",
    "categoryId": 1
  }'
```

**Models**: `ICreateSubcategoryData`, `ISubcategoryResponse`

#### PUT /subcategory/{id} (Private)

Update a subcategory.

**Service**: `subcategoriesService.update()`

**Models**: `IUpdateSubcategoryData`, `ISubcategory`

#### DELETE /subcategory/{id} (Private)

Delete a subcategory.

**Service**: `subcategoriesService.delete()`

**Models**: `ISubcategory`

---

### Brands

#### GET /brand

Get all brands.

**Service**: `brandsService.getAll()`  
**File**: `src/services/brands/brands.service.ts`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/brand \
  -H "Content-Type: application/json"
```

**Example Response**:

```json
[
  {
    "id": 1,
    "name": "Apple",
    "slug": "apple",
    "image": "apple.jpg",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

**Models**: `IBrand[]`

#### GET /brand/by-id/{id}

Get brand by ID.

**Service**: `brandsService.getById()`

**Models**: `IBrand`

#### GET /brand/by-slug/{slug}

Get brand by slug.

**Service**: `brandsService.getBySlug()`

**Models**: `IBrand`

#### POST /brand (Private)

Create a new brand.

**Service**: `brandsService.create()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/brand \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token" \
  -d '{
    "name": "New Brand"
  }'
```

**Models**: `ICreateBrandData`, `IBrand`

#### PUT /brand/{id} (Private)

Update a brand.

**Service**: `brandsService.update()`

**Models**: `IUpdateBrandData`, `IBrand`

#### DELETE /brand/{id} (Private)

Delete a brand.

**Service**: `brandsService.delete()`

**Models**: `IBrand`

---

### Users

#### GET /user/get-all (Private)

Get all users.

**Service**: `usersService.getAll()`  
**File**: `src/services/users/users.service.ts`

**Request**:

```bash
curl -X GET ${SERVER_URL}/backend/user/get-all \
  -H "Authorization: Bearer your-jwt-token"
```

**Example Response**:

```json
[
  {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
]
```

**Models**: `IUserResponse[]`

#### GET /user/by-id/{id} (Private)

Get user by ID.

**Service**: `usersService.getById()`

**Models**: `IUserResponse`

#### DELETE /user/{id} (Private)

Delete a user.

**Service**: `usersService.delete()`

**Models**: `IUserResponse`

---

### Contact Forms

#### POST /mailer/contact-form

Send contact form.

**Service**: `formsService.contact()`  
**File**: `src/services/forms/forms.service.ts`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/mailer/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Question about product",
    "message": "I have a question about your product..."
  }'
```

**Example Response**:

```json
true
```

**Models**: `IContactFromData`

#### POST /mailer/callback-form

Callback request.

**Service**: `formsService.callback()`

**Request**:

```bash
curl -X POST ${SERVER_URL}/backend/mailer/callback-form \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+1234567890"
  }'
```

**Example Response**:

```json
true
```

**Models**: `ICallbackFromData`

---

## Error Handling

All API calls handle errors through the `errorCatch` utility:

```typescript
export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;
  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message;
};
```

## Authentication

Private endpoints use Bearer tokens:

```typescript
// Automatically added via axios interceptor
config.headers.Authorization = `Bearer ${accessToken}`;
```

Tokens are automatically refreshed on expiration through the `/auth/access-token` endpoint.
