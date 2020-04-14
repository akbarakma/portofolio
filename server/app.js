const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { Message } = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async(req, res) => {
  try {
    const { name, message } = req.body;
    const result = await Message.create({ name, message });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error' })
  }
});

app.get('/', async(req, res) => {
  try {
    const result = await Message.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error' })
  }
});

app.delete('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    await Message.destroy({ where: { id } });
    res.status(200).json({ msg: 'Berhasil' });
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error' })
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));