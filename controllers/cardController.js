const Card = require('../models/card');
``
exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.addCard = async (req, res) => {
    try {
        const { title, color, image, description } = req.body;
        const newCard = new Card({ title, color, image, description });
        await newCard.save();
        res.status(200).json({ message: 'Card added successfully' });
    } catch (err) {
        console.error('Error adding card:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
