const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find().then( task => {
            res.render('task/index', {'tasks': task});
		})

    },
	createGet: (req, res) => {
        res.render('task/create')
	},
	createPost: (req, res) => {
        let task = req.body;
        Task.create(task).then(res.redirect('/'))
	},
	deleteGet: (req, res) => {
    	let id = req.params.id;
        Task.findById(id)
			.then(task => {
				res.render('task/delete',task)
			})
	},
	deletePost: (req, res) => {
        let id = req.params.id;
        Task.findByIdAndRemove(id).then(res.redirect('/'))
	}
};