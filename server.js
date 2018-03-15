var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
mongoose.connect('mongodb://localhost/super-cool-blog-db');

const PORT = process.env.PORT || 5000;

// Serve our static assets
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  res.send("You've hit the API endpoint");
});

app.get('/api/posts', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) return console.log(err);
    res.send(JSON.stringify(posts));
  })
});

app.post('/api/post', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content
  }, (err, post) => {
    res.status(200).send(post)
  })
})

app.delete('/api/post', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body.id);
  console.log(req.body);
  Post.deleteOne({
    _id: req.body.id
  }, (err, post) => {
    if (err) res.status(500).send('An error occurred:', err);
    res.send(post)
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
