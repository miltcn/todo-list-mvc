const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.show);               // Lista todas as tasks
router.get('/create', TaskController.viewCreate);   // Chama a view de criar tasks
router.post('/create', TaskController.save);        // Salva a task no banco
router.get('/edit/:id', TaskController.viewUpdate); // Chama a view de atualzar tasks
router.post('/edit', TaskController.update);
router.post('/remove', TaskController.delete);

router.post('/update-status', TaskController.toggleStatus);



module.exports = router;