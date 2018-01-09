const router = require("express").Router();
const db = require("../../models");

// api/db
router
    .route("/:name")
    .get(db.Account.findOne({
        where: {
            name: req.params.name
        }
        }).then(function (dbAccount) {
            res.json(dbAccount);
        });
    );
