import * as React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import './scss/app';
import Blog from './components/Blog';
import Onepost from './components/Onepost';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            name: null, blogposts: [{
                id: null,
                title: null,
                content: null,
                authorid: null,
                _created: null
            }]
        };
    }

    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })

        let r1 = await fetch('/api/blogs');
        let name1 = await r1.json();
        this.setState({ blogposts: name1 });
    }

    render() {
        return (
            <Router>
                <main className="container">
                    <nav className="navbar navbar-light nav-bar">
                        <span className="navbar-brand mb-0 h1">Best Blog Ever</span>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Blog}></Route>
                        <Route exact path='/blog/:id' component={Onepost}></Route>
                    </Switch>
                </main>
            </Router>
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