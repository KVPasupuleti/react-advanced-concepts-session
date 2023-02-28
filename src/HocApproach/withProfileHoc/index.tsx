import React from "react"

interface BaseProps {
    name: string
}

interface Props {
    forwardedRef: any;
}

const fruits = ["Apple", "Banana", "Orange", "Mango"];


export const withProfileHoc = (WrappedComponent: any) => {
    class EnhancedComponent extends React.Component<Props> {
        state = {
            userName: ''
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

        componentDidMount(): void {
            this.getUserProfile();
        }

        renderLoginView = () => {
            return <div>
                <h1>Login to the Platform</h1>
            </div>
        }

        renderListOfFruits = () => {
            return <ul>{fruits.map(eachFruit => {
                return <li key={eachFruit}>{eachFruit}</li>
            })}</ul>
        }


        render() {
            return (

                <>
                    {this.state.userName ? this.renderListOfFruits() : this.renderLoginView()}
                    <WrappedComponent {...this.props} ref={this.props.forwardedRef} userName={this.state.userName} />;
                </>
            )
        }
    }

    return React.forwardRef((props: BaseProps, ref) => {
        return <EnhancedComponent forwardedRef={ref} {...props} />;
    });
}