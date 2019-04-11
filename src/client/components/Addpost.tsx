import * as React from 'react';

export default class Addpost extends React.Component<AddpostProps, AddpostState>{
    constructor(props: AddpostProps) {
        super(props)
        this.state = {
            title: "",
            tag: 1,
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

    handleTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    handleContent = (e) => {
        this.setState({ content: e.target.value })
    }

    handleTag = (e) => {
        this.setState({ tag: e.target.value })
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
                    </form>
                </section>
                <section className="col-2"></section>
            </section>
        )
    }
}

interface AddpostProps {

}

interface AddpostState {
    title: string,
    tag: number,
    content: string,
    tagarray: any[]
}