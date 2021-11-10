import express from "express"
import { requireSignin, isAuth, isAdmin } from "../controller/auth";
import { edit, list, create, remove, findOneProduct, sortPriceAscending, sortPriceDecrease, search } from "../controller/products";
import { findUserByID } from "../controller/user";

const router = express.Router();

router.get('/products', list)
router.post('/products/create/:userId', requireSignin, isAuth, isAdmin, create)
router.get('/products/:productId/:userId', findOneProduct)
// router.get('products/:productId', read)
router.delete('/products/:productId', remove)
// router.param('/productId', productById)
router.put("/products/:productId/:userId", requireSignin, isAuth, isAdmin, edit)
router.get("/products/search", search);
// router.get("/products/sortPrice", sortPriceDecrease);
router.param("userId", findUserByID);

// router.param("categoryId",cat)
module.exports = router;