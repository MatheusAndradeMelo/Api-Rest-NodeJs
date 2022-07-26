import app from './src/App.js'

const port = process.env.Port || 3000; // default port

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
