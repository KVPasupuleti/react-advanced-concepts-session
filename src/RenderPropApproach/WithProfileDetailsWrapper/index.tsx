import React, { Component } from 'react';
import { fruitsList } from '../../constants';

interface Props {
    renderWrappedComponent: (userName: string) => React.ReactNode
}

class WithProfileDetailsWrapper extends Component<Props> {

    state = {
        userName: ''
    }

    componentDidMount(): void {
        this.getUserProfile()
    }

    getUserProfile = () => {
        fetch('https://5e68646fd426c00016b7cf54.mockapi.io/api/v1/profile').then((response) => {
            return response.json();
        }).then((data) => {
            const userName = data[0].name;
            this.setState({
                userName: userName
            })
        }).catch((error) => {
            console.log(error);
        })
    }



    renderLoginView = () => {
        return <div>
            <h1>Login to the Platform</h1>
        </div>
    }

    renderListOfFruits = () => {
        return (
            <>
                {this.props.renderWrappedComponent(this.state.userName)}
                <ul>{fruitsList.map(eachFruit => {
                    return <li key={eachFruit}>{eachFruit}</li>
                })}</ul>
            </>)
    }




    render() {
        return (
            <div>
                {this.state.userName ? this.renderListOfFruits() : this.renderLoginView()}
            </div>
        );
    }
}

export default WithProfileDetailsWrapper;