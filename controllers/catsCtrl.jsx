const Cat = require('../model/cat.jsx');

function respond(err, res, response) {
    err ? res.send(err) : res.json(response);
}

module.exports = {
    getCats(req, res) {
        Cat.find((err, cats) => {
            respond(err, res, cats);
        });
    },

    getCat(req, res) {
        Cat.findById(req.params.cat_id, (err, cat) => {
            respond(err, res, cat);
        });
    },

    postCat(req, res) {
        const cat = new Cat();
        cat.name = req.body.name;

        cat.save((err) => {
            const response = {message: 'Cat created!'};
            respond(err, res, response);
        });
    },

    putCat(req, res) {
        Cat.findById(req.params.cat_id, (err, cat) => {
            if (err) {
                res.send(err);
            }
            cat.name = req.body.name;

            cat.save((err) => {
                const response = {message: 'Cat updated!'};
                respond(err, res, response);
            });
        });
    },

    deleteCat(req, res) {
        Cat.remove({
            _id: req.params.cat_id
        }, (err, cat) => {
            if (err) {
                res.send(err);
            }
            const response = { message: `Successfully deleted cat ${cat.id}` };
            respond(err, res, response);
        });
    }
};