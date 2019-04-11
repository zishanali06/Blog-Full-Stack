import * as express from 'express';
import db from '../../db';

const router = express.Router();

//get tags for specific post
router.get('/blogs/tags/:id', async (req, res) => {
    try {
        res.json(await db.Blogs.getTags(req.params.id));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//get all tags
router.get('/blogs/alltags', async (req, res) => {
    try {
        res.json(await db.Blogs.allTags());
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//get single or all blog posts
router.get('/blogs/:id?', async (req, res) => {
    let id: number = req.params.id;
    if (id) {
        try {
            res.json(await db.Blogs.one(id))
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        };
    } else {
        try {
            res.json(await db.Blogs.all())
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        };
    };
});

//add new blog post
router.post('/blogs/add', async (req, res) => {
    try{
        await db.Blogs.addpost(req.body);
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

//change blog post
router.put('/blogs/change/:id', async (req, res) => {
    try {
        await db.Blogs.changepost(req.params.id, req.body);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//delete blog post
router.delete('/blogs/delete/:id', async (req, res) => {
    try {
        await db.Blogs.remove(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;