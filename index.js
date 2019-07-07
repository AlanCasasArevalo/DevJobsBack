const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Todo ok'
    })
});

app.listen(5000);

