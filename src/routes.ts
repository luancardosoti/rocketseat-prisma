import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/createProductController";
import { CreateProductExistsCategoryController } from "./controllers/CreateProductExistsCategoryController";
import { FindProductController } from "./controllers/FindProductController";
import { FindProductsByCategoryController } from "./controllers/FindProductsByCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductExistsCategory = new CreateProductExistsCategoryController();
const findProduct = new FindProductController();
const findProductsByCategory = new FindProductsByCategoryController();

router.post('/products', createProduct.handle);
router.post('/categories', createCategory.handle);
router.post('/productCategory', createProductCategory.handle);
router.post('/productWithCategory', createProductExistsCategory.handle);
router.get('/product/:id', findProduct.handle);
router.get('/category/:id', findProductsByCategory.handle);

export { router };