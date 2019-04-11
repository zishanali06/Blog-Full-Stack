import { Query } from './index';

const all = async () => Query('select * from blogs');

const one = async (id: number) => Query('select blogs.id, blogs.title, blogs.content, authors.name as author, blogs._created from blogs join authors on authors.id = blogs.authorid where blogs.id=?', [id]);

const addpost = async (post: {
    title: string,
    content: string,
    tagid: number
}) => {
    let r = await Query(`insert into blogs (title, content, authorid) values (?)`, [post.title, post.content, 1]);
    Query(`insert into blogtags (blogid, tagid) values (?)`, [r.insertId, post.tagid]);
}

const changepost = async (id: number, post: {title: string, content: string}) => {
    Query(`update blogs set title = "${post.title}", content ="${post.content}" where id=${id}`);
}

const remove = async (id: number) => {
    await Query(`delete from blogtags where blogid=${id}`);
    Query(`delete from blogs where id=${id}`);
}

const getTags = async (id: number) => {
    await Query(`call spBlogTags(${id})`);
}

const allTags = async () => Query('select * from tags');

export default {
    all,
    one,
    addpost,
    changepost,
    remove,
    getTags,
    allTags
}