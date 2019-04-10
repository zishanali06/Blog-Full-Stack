import { Query } from './index';

const all = async () => Query('select * from blogs');

const one = async (id: number) => Query('select * from blogs where id=?', [id]);

const addpost = async (post: {
    title: string,
    content: string,
    tagid: number
}) => {
    console.log(post);
    Query(`insert into blogs (title, content, authorid) values (?)`, [post.title, post.content, 1]);
}

export default {
    all,
    one,
    addpost
}

