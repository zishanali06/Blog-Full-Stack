import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Addpost extends React.Component<AddpostProps, AddpostState>{
    constructor(props: AddpostProps) {
        super(props)
        this.state = {
            title: "",
            tag: '1',
            content: "",
            tagarray: []
        }
    }

    async componentDidMount() {
        let r = await fetch('/api/blogs/alltags');
        let data = await r.json();
        let newarray = Object.keys(data).map(key => data[key].name);
        console.log(newarray);
        this.setState({ tagarray: newarray });
    }

    handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value })
    }

    handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ content: e.target.value })
    }

    handleTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ tag: e.target.value })
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        let newpost = {
            title: this.state.title,
            content: this.state.content,
            tagid: this.state.tag
        }
        fetch('/api/blogs/add', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(newpost)
        }).then(() => this.props.history.push('/'))
        .catch(e => console.log(e));
    }

    render() {
        return (
            <section className="row">
                <section className="col-12"><h1><br /></h1>
                    <h1><br /></h1>
                </section>
                <section className="col-2"></section>
                <section className="col-8">
                    <form>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlInput1">Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={this.state.title} onChange={this.handleTitle} />
                        </section>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Tag</label>
                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.tag} onChange={this.handleTag}>
                                {this.state.tagarray.map((tag, index) => {
                                    index = index + 1;
                                    return <option value={index} key={index}>{tag}</option>
                                })}
                            </select>
                        </section>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Content</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} value={this.state.content} onChange={this.handleContent}></textarea>
                        </section>
                        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Save Edit</button>
                    </form>
                </section>
                <section className="col-2"></section>
            </section>
        )
    }
}

interface AddpostProps extends RouteComponentProps {

}

interface AddpostState {
    title: string,
    tag: string,
    content: string,
    tagarray: any[]
}