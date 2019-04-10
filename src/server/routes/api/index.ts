import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.json(`Worldewe`);
});

router.get('/blogs', async (req, res) => {
    try {
        res.json(await db.Blogs.all())
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;