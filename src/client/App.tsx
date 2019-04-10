import * as React from 'react';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null, blogposts: [{
            id: null,
            title: null,
            content: null,
            authorid: null,
            _created: null
        }] };
    }

    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })

        let r1 = await fetch('/api/blogs');
        let name1 = await r1.json();
        this.setState({ blogposts: name1 });
    }

    render () {
        return (
            <main className="container">
                <h1 className="covalence-blue">Hello Zishan!</h1>
                <h2></h2>
                {this.state.blogposts.map((blog) => {
                    return <h3 key={blog.id}>{blog.title}</h3>
                })}
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
    blogposts: [{
        id: number,
        title: string,
        content: string,
        authorid: number,
        _created: string
    }];
}