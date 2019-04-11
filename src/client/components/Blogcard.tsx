import * as React from 'react';
import blogs from '../../server/db/blogs';

export default class Blogcard extends React.Component<IBlogcardProps, IBlogcardState>{
    constructor(props: IBlogcardProps) {
        super(props)
        this.state = {
            blogposts: [{
                id: null,
                title: null,
                content: null,
                authorid: null,
                _created: null
            }]
        };
    }

    render() {
        if(this.props.post.content == null){
            return (<section></section>);
        }
        if(this.props.post.content.length > 64) {
            this.props.post.content = this.props.post.content.slice(0,90).concat('...');
        }
        return (
            <section className="col-4 m-auto">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title}</h5>
                        <p className="card-text">{this.props.post.content}</p>
                        <a href="#" className="btn btn-primary">View Post</a>
                    </div>
                </div>
            </section>
        )
    }
}

interface IBlogcardProps {
    post: {
        id: number,
        title: string,
        content: string,
        authorid: number,
        _created: string
    }
}

interface IBlogcardState {
    blogposts: [{
        id: number,
        title: string,
        content: string,
        authorid: number,
        _created: string
    }];
}