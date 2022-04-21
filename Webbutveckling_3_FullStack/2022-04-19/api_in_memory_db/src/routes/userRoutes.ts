import { Router} from 'express'
import  {getAllUsers} from "../controllers/getAllUsers";
import {createUser} from "../controllers/createUser";
import {deleteUser} from "../controllers/deleteUser";
import {updateUser} from "../controllers/updateUser";
import {getUser} from "../controllers/getUser";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export = router;