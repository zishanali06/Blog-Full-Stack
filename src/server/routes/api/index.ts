import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.json(`Worldewe`);
});

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

router.post('/blogs/add', async (req, res) => {
    try{
        await db.Blogs.addpost(req.body);
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/blogs/change/:id', async (req, res) => {
    try {
        await db.Blogs.changepost(req.params.id, req.body);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.delete('/blogs/delete/:id', async (req, res) => {
    try {
        await db.Blogs.remove(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/blogs/:id/tags', async (req, res) => {
    try {
        let r = await db.Blogs.getTags(req.params.id);
        console.log(r);
        res.json(r);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/blogs/alltags', async (req, res) => {
    try {
        res.json(await db.Blogs.allTags());
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;