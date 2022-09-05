import {Router} from "express";
import {methods as bookController} from "./../controllers/book.controller";

const router = Router();

router.get("/",bookController.getBooks);
router.get("/:id",bookController.getBook);
router.get("/search/:author",bookController.getBookByAuthor);
router.get("/search/language/:language",bookController.getBookByLanguage);
router.post("/",bookController.addBook);
router.put("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);

export default router;