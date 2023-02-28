import React, { Component } from 'react';
import WithProfileDetailsWrapper from '../WithProfileDetailsWrapper';
import WithResizeWrapper from '../WithResizeWrapper';

interface Props {
    name: string;
    ref: React.RefObject<any>
}

class BaseRenderPropComponent extends Component<Props> {
    userName = ''
    renderWrappedComponent = (): React.ReactNode => {
        return (
            <div>
                Hi {this.props.name}
                {this.userName}
            </div>
        );
    }

    renderProfileWrappedComponent = (userName: string): React.ReactNode => {
        this.userName = userName;
        return <WithResizeWrapper renderWrappedComponent={this.renderWrappedComponent} />
    }

    render() {
        return (
            <WithProfileDetailsWrapper renderWrappedComponent={this.renderProfileWrappedComponent} />
        );
    }
}

export default BaseRenderPropComponent;