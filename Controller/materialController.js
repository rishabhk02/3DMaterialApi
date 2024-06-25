const Material = require('../Models/3DMaterial');
const path = require('path');

class MaterialController {
    async addNewMaterial(req, res) {
        try {
            const { name, technology, colors, pricePerGram } = req.body;
            if (!name) return res.status(400).json({ message: 'Material name is required' });
            if (!technology) return res.status(400).json({ message: 'Printing technology is required' });
            if (!colors || colors.length == 0) return res.status(400).json({ message: 'Available colors is required' });
            if (!pricePerGram) return res.status(400).json({ message: 'Price per gram is required' });
            let data = req.body;
            data.imageUrl = req.file.filename;
            let newMaterial = await Material.create(data);
            return res.status(201).json({ newMaterial });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    }

    async getAllMaterial(req, res) {
        try {
            const materials = await Material.find().select('-imageUrl');
            return res.status(200).json({ materials });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    }

    async getMaterialById(req, res) {
        try {
            const material = await Material.findOne({ _id: req.params.id });
            const imageUrl = `http://localhost:${process.env.PORT}/get-image?fileName=${material?.imageUrl}`;
            if (!material) return res.status(404).json({ message: 'Invalid material id' });
            return res.status(200).json({ material, imageUrl });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    }

    async getImageByName(req, res) {
        try {
            const fileName = req.query.fileName; 
            const filePath = path.join(__dirname,'..','Images',fileName);
            res.sendFile(filePath, (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                    res.status(500).send('Error sending file');
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }

    }

    async updateMaterial(req, res) {
        try {
            let data = req.body;
            if (req?.file?.filename) {
                data.imageUrl = req.file.filename;
            }
            let updatedMaterial = await Material.findOneAndUpdate({ _id: req.params.id }, { $set: data }, { new: true });
            return res.status(200).json({ updatedMaterial });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    }

    async deleteMaterialById(req, res) {
        try {
            const deleted = await Material.findOneAndDelete({ _id: req.params.id });
            if (!deleted) return res.status(404).json({ message: 'Invalid material id' });
            return res.status(200).json({ message: 'Material deleted successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    }
}

module.exports = new MaterialController();