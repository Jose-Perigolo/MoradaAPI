import express from 'express';
import { FindImovelController, ImportImovelController } from './modules/controllers/imovel.controllers';
import multer from 'multer';

const upload = multer({ dest: 'tmp/' })

const imovelRouter = express.Router();

const importImovelUseController = new ImportImovelController()
const findImovelController = new FindImovelController()

imovelRouter.post('/import', upload.single('imoveis'), importImovelUseController.handle);
imovelRouter.get('/imoveis/search', findImovelController.handle);

export = imovelRouter;