import React from "react";

/*
This class component displays the Resident names fetched from url.
*/

class Person extends React.Component{
    constructor() {
        super();
        this.state = {items: []}
    }
    componentDidMount() {

        fetch(this.props.URL)
            .then(response => response.json())
            .then(results => this.setState({items: results, loading: false}))
            .catch((err) => console.log('err:', err));
    }
    render() {
        return (
            <div>
            <li key={this.state.items.url}>{this.state.items.name}</li>
            </div>
        );
    }
}

export default Person;
