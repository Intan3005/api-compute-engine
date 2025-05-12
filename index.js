const express = require('express');
const app = express();
const PORT = 3000;

// Contoh endpoint
app.get('/', (req, res) => {
  res.send('Hai, API is Ready!!');
});

// Menjalankan server
app.listen(PORT, () => {
        console.log(Server is running on http://localhost:${PORT});
});