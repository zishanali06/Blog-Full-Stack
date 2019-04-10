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
        console.log(req.body);
        await db.Blogs.addpost(req.body);
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;