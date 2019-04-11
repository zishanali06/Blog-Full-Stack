import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';


export default class Onepost extends React.Component<IOnepostProps, IOnepostState>{
    constructor(props: IOnepostProps) {
        super(props)
        this.state = {
            post: {
                id: null,
                title: '',
                content: '',
                authorid: null,
                _created: null
            }
        }
    }

    async componentWillMount() {
        let r = await fetch(`/api/blogs/${this.props.match.params.id}`);
        console.log(r);
        let post = await r.json();
        console.log(post);
        console.log(post[0].title);
        this.setState({ post: post[0] });
    }

    render() {
        return (
            <section className="row">
            <section className="col-12"><h1><br /></h1>
                    <h1><br /></h1>
                </section>
                <section className="col-2"></section>
                <section className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.post.title}</h5>
                            <p className="card-text">{this.state.post.content}</p>
                        </div>
                    </div>
                </section>
                <section className="col-2"></section>
            </section>
        )
    }
}

interface IOnepostProps extends RouteComponentProps<{ id: string }> {

}

interface IOnepostState {
    post: {
        id: number;
        title: string;
        content: string;
        authorid: number;
        _created: string;
    }
}