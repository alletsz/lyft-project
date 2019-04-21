const express = require('express')
const app = express()
const port = 3001

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static('dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.post('/test', function (req, res) {
  console.log(res.body)
  console.log('success')
  const currStr = req.body.string_to_cut
  let alteredStr = '';
  if (currStr.length > 0) {
    for (var i = 2; i < currStr.length; i += 3) {
      alteredStr += currStr[i];
    }

  }
  // res.send({ return_string: req.body.string_to_cut });
  res.send({ return_string: alteredStr });
});


// app.post('/test', function (req, res) {
//   console.log(res.body)
//   console.log('success')
//   res.send({ return_string: req.body.string_to_cut });
//   res.send('success');
// });