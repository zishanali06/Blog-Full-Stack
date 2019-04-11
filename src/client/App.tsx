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
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-bar">
                        <a className="navbar-brand" href="#">Zishan's Blog</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Add Blog Post</a>
                                </li>
                            </ul>
                        </div>
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