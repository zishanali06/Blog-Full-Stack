import { Query } from './index';

const all = async () => Query('select * from blogs');

export default {
    all
}

