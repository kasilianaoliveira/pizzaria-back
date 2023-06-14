import { Router   } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserControler } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';


export const router = Router();

//LOGIN
router.post('/session', new AuthUserControler().handle);

//USERS
router.post('/users', new CreateUserController().handle);

router.get('/me',isAuthenticated, new DetailUserController().handle);


