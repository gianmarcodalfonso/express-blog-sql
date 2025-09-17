//importo i dati dei posts
const connection = require(`../data/db.js`);

// definizione delle funzioni che verranno richiamate
//index
const index = (req, res) => {
	const sql = "SELECT * FROM blog_db.posts";

	connection.query(sql, (err, results) => {
		if (err)
			return res
				.status(500)
				.json({ error: "Errore durante l'esecuzione della query: " + err });
		res.json(results);
	});
};

//show
const show = (req, res) => {
	const id = parseInt(req.params.id);

	const post = posts.find((item) => item.id === id);

	if (!post) {
		return res
			.status(404)
			.json({ error: "not found", message: "Post non trovato" });
	}

	res.json(post);
};

//store
const store = (req, res) => {
	const newId = posts[posts.length - 1].id + 1;

	const newPost = {
		id: newId,
		title: req.body.title,
		content: req.body.content,
		image: req.body.image,
		tags: req.body.tags,
	};

	posts.push(newPost);

	console.log(posts);

	res.status(201).json(newPost);
};

//update
const update = (req, res) => {
	const id = parseInt(req.params.id);

	const post = posts.find((item) => item.id === id);

	if (!post) {
		return res
			.status(404)
			.json({ error: "404 not found", message: "Post non trovato" });
	}

	post.title = req.body.title;
	post.content = req.body.content;
	post.tags = req.body.tags;

	res.send(post);
};

//modify
const modify = (req, res) => {
	res.send(`Modifica parziale del post con id: ${req.params.id}`);
};

//destroy
const destroy = (req, res) => {
	const id = parseInt(req.params.id);

	const post = posts.find((item) => item.id === id);

	posts.splice(posts.indexOf(post), 1);

	res.sendStatus(204);
};

module.exports = {
	index,
	show,
	store,
	update,
	modify,
	destroy,
};
