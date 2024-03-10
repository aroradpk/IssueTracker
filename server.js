const express = require('express');
require('dotenv').config();
require('./config/mongoose');
const userRoutes = require('./routes/userRoutes');
const issueRoutes = require('./routes/issueRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',issueRoutes);

app.get('/', (req, res) => {
    res.send('Issue tracker api');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });