import { Router } from 'express';

const router = Router();

router.post('/users', (request, response) => {
    return response.status(201).send();
});

router.get('/users', (request, response) => {
    return response.status(200).json([
        { id: 1, name: "Ana" },
        { id: 2, name: "Bia" },
        { id: 3, name: "Lucia" },
        { id: 4, name: "Carol" }
    ]);
})

export { router };