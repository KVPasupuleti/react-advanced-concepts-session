import React, { Component } from 'react';

interface Props {
    renderWrappedComponent: () => React.ReactElement
    activePage: string
}

class NxtWatchWrapper extends Component<Props> {
    render() {
        return (
            <div>
                <div>
                    Sidebar - {this.props.activePage}
                </div>
                {this.props.renderWrappedComponent()}
                <div>TopNavBar</div>
            </div>
        );
    }
}

export default NxtWatchWrapper;

class HomePage extends Component {
    renderWrappedComponent = (): React.ReactElement => {
        return <div>Home Page</div>
    }
    render() {
        return (
            <div>
                <NxtWatchWrapper activePage='HomePage' renderWrappedComponent={this.renderWrappedComponent} />
            </div>
        );
    }
}