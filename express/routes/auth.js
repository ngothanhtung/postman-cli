var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456789') {
    res.status(200).json({ ok: true });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
