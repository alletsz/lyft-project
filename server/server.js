const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static('dist'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.post('/test', function (req, res) {
  console.log(res.body)
  console.log('success')
  const currStr = req.body.string_to_cut
  let alteredStr = '';
  if (currStr.length > 2) {
    for (var i = 2; i < currStr.length; i += 3) {
      alteredStr += currStr[i];
    }
   
  } else {
    alteredStr = 'Words must be at least 3 characters in length. Please try again.'
  }  

  res.send({ return_string: alteredStr });
});
