import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input
                    type="text"
                    name="test"
                    value={this.state.value}
                    onChange={this.handleChange}/> {this.props.show && <p>shown</p>}
            </div>
        )
    }
}

export default Test;