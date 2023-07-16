// app.js
const express = require('express');
const app = express();
const path = require('path'); // Don't forget to require the 'path' module

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Body-parser middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Route to display the form
app.get('/', (req, res) => {
  res.render('form'); // Renders the form.pug template
});
let textlog = [];
// Route to handle the form submission
app.post('/submit', (req, res) => {
  const harFile = req.body.harFileInput;
  const checkbox1 = req.body.checkbox1;
  const checkbox2 = req.body.checkbox2;
  const checkbox3 = req.body.checkbox3;
  const input1 = req.body.input1;
  const input2 = req.body.input2;
  const input3 = req.body.input3;

  textlog.push('hello harsh')
  
  // Render the result.pug template and pass the input values as locals
  res.render('result', { harFile,input1, input2, input3,checkbox1,checkbox2,checkbox3 ,textlog});
});

// Start the server
const port = 1825;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
