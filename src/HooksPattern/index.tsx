import React, { Component } from 'react';
import { useResizeHook } from './useResizeHook';

interface Props {
    name: string;
}

const BaseHooksComponent = (props: Props) => {
    const windowSize = useResizeHook();

    return (
        <div>
            <p>

                Hi {props.name}
            </p>
            <p>

                Height:                {windowSize.height}
                Width: {windowSize.width}
            </p>
        </div>
    );

}

export default BaseHooksComponent;