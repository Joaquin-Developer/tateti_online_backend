
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Ta Te Ti");
});

module.exports = router;
