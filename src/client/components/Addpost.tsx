import * as React from 'react';

export default class Addpost extends React.Component<AddpostProps, AddpostState>{
    constructor(props: AddpostProps) {
        super(props)
        this.state = {
            title: "",
            tag: 0,
            content: ""
        }
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    handleContent = (e) => {
        this.setState({ content: e.target.value })
    }

    render() {
        return (
            <section className="row">
                <form>
                    <section className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={this.state.title} onChange={this.handleTitle} />
                    </section>
                    <section className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Tag</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </section>
                    <section className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} value={this.state.content} onChange={this.handleContent}></textarea>
                    </section>
                </form>
            </section>
        )
    }
}

interface AddpostProps {

}

interface AddpostState {
    title: string,
    tag: number,
    content: string
}