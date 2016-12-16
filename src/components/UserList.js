import React, { Component } from 'react';
import 'whatwg-fetch';
import '../css/UserList.css';

class UserList extends Component {
    constructor(props) {
        super(props);

       
        this.state = {
            userList: []
        }
        this.users = this.props.users;
        // this.userList = this.users.map((u, index) => {
        //     return (
        //         <div className="user" key={index}>{index} - {u.name}</div>
        //     );
        // });


    }

    componentDidMount() {
        // https://randomuser.me/api/?results=50

        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(response => {
                const userList = response.results.map((u, index) => {
                    return (
                        <div className="user" key={index}>{u.name.first}</div>
                    );
                });
                this.setState({userList: userList})

            })

    }


    render() {

        return (
            <div>
                <div>{this.state.userList}</div>
            </div>


        );
    }
}

export default UserList;