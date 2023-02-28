import React, { Component } from 'react';

const fruitsList = ['Apple', 'Mango', 'Banana', 'Orange']

interface Props {
    name: string;
}

class SingleCompWithMultiResponse extends Component<Props> {
    state = {
        userName: ''
    }

    componentDidMount(): void {
        this.getUserProfile()
        this.addResizeEventListener();
    }

    handleResize = (): void => {
        console.log('resize', window.innerWidth, window.innerHeight)
    }

    addResizeEventListener(): void {
        window.addEventListener('resize', this.handleResize);
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
        return <ul>{fruitsList.map(eachFruit => {
            return <li key={eachFruit}>{eachFruit}</li>
        })}</ul>
    }



    render() {
        return (
            <div>
                <p>Hi {this.props.name}</p>
                {this.state.userName ? this.renderListOfFruits() : this.renderLoginView()}
            </div>
        );
    }
}

export default SingleCompWithMultiResponse;