const { MenuItem } = require('../models');

const menuController = {
  getAllItems: async (req, res) => {
    try {
      const items = await MenuItem.findAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getItemById: async (req, res) => {
    try {
      const item = await MenuItem.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createItem: async (req, res) => {
    try {
      const newItem = await MenuItem.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateItem: async (req, res) => {
    try {
      const item = await MenuItem.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });

      await item.update(req.body);
      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteItem: async (req, res) => {
    try {
      const item = await MenuItem.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });

      await item.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = menuController;
