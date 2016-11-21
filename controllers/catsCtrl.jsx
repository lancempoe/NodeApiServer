const Cat = require('../model/cat.jsx');

function saveCat(cat, res, responseMessage) {
    cat.save((err) => {
        var response = {message: responseMessage};
        respond(err, res, response);
    });
}
function respond(err, res, response) {
    err ? res.send(err) : res.json(response);
}

module.exports = {
    getCats(req, res) {
        Cat.find((err, cats) => {
            respond(err, res, cats);
        });
    },

    postCat(req, res) {
        var cat = new Cat();
        cat.name = req.body.name;

        saveCat(cat, res, 'Cat created!');
    },

    getCat(req, res) {
        Cat.findById(req.params.cat_id, function (err, cat) {
            err ? res.send(err) : res.json(cat);
        });
    },

    putCat(req, res) {
        Cat.findById(req.params.cat_id, (err, cat) => {
            if (err) {
                res.send(err);
            }
            cat.name = req.body.name;

            saveCat(cat, res, 'Cat updated!');
        });
    }
};