'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
app.use(require('morgan')('dev'));
/* GET home page. */
router.get('/latest', function(req, res, next) {
    const latest = getLatestRelease();
    const clientVersion = req.query.v;
    if (clientVersion === latest) {
        res.status(204).end();
    } else {
        res.json({
            url: `${getBaseUrl()}/releases/darwin/${latest}/MyApp.zip`
        });
    }
});

let getLatestRelease = () => {
    const dir = `${__dirname}/releases/darwin`;

    const versionsDesc = fs.readdirSync(dir).filter((file) => {
        const filePath = path.join(dir, file);
        return fs.statSync(filePath).isDirectory();
    }).reverse();
    return versionsDesc[0];
};

let getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000';
    } else {
        return 'http://download.mydomain.com'
    }
}

module.exports = router;
