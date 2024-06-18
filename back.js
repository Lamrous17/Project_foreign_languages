const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Обслуживание статических файлов из папки 'public'
app.use(express.static('public'));

// Обработка всех остальных маршрутов и возвращение 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
