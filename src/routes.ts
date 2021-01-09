import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});
router.get('/users', (request, response) => {
  return response.status(200).json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Bia" },
    { id: 3, name: "Lucia" },
    { id: 4, name: "Carol" }
  ]);
});

export { router };