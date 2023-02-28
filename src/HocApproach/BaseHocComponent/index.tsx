import React, { Component } from 'react';
import { withProfileHoc } from '../withProfileHoc';
import withResizeHoc from '../withResizeHoc';

interface Props {
    name: string;
}

class BaseHocComponent extends Component<Props> {
    render() {
        return (
            <div>
                <p>Hi {this.props.name}</p>
            </div>
        );
    }
}

export default withProfileHoc(withResizeHoc(BaseHocComponent));