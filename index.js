const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


// Put API routes here, before the "catch all" route
app.use('/users', require('./routes/users.js'))
app.use('/post', require('./routes/post.js'))
app.use('/comment', require('./routes/comment.js'))
app.use('/event', require('./routes/event.js'))

db.on("connected", () => {
    console.clear();
    app.listen(PORT, () => {
      process.env.NODE_ENV === "production"
        ? console.log(`Express server running in production on port ${PORT}\n\n`)
        : console.log(`Express server running in development on: ${PORT}`);
    });
  });