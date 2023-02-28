import React, { Component } from 'react';

interface Props {
    renderWrappedComponent: () => React.ReactNode
}

class WithResizeWrapper extends Component<Props> {
    handleResize = (): void => {
        console.log('resize', window.innerWidth, window.innerHeight)
    }

    addResizeEventListener(): void {
        window.addEventListener('resize', this.handleResize);
    }

    componentDidMount(): void {
        this.addResizeEventListener();
    }

    render() {
        return (
            <div>
                {this.props.renderWrappedComponent()}
            </div>
        );
    }
}

export default WithResizeWrapper;