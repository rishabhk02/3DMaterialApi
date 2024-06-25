const multer = require('multer');
const express = require('express');
const router = express.Router();
const path = require('path');
const MaterialController = require('../Controller/materialController');

const imageStorage = multer.diskStorage({
    destination: '/NodeJs Assignment/Images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname));
    }
});

const upload = multer({ storage: imageStorage });

router.post('/materials', upload.single('image'), MaterialController.addNewMaterial);

router.get('/materials', MaterialController.getAllMaterial);

router.get('/materials/:id', MaterialController.getMaterialById);

router.get('/get-image', MaterialController.getImageByName);

router.put('/materials/:id', upload.single('image'), MaterialController.updateMaterial);

router.delete('/materials/:id', MaterialController.deleteMaterialById);

module.exports = router;