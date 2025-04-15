const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const sequelize = require('./dbConnect');
const models = require('./models'); 

sequelize.sync().then(() => {
  console.log("All tables dropped and re-synced with force: true");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("Sync error:", err);
});

const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); 
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes); 



app.get('/', (req, res) => {
  res.send('API is working!');
});
