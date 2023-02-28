import React from "react";

interface WrappedCompProps {
    name: string
}

interface Props {
    forwardedRef: any;
}

const withResizeHoc = (WrappedComponent: React.ComponentType<any>) => {
    class EnhancedComponent extends React.Component<Props> {
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
            return <WrappedComponent {...this.props} ref={this.props.forwardedRef} />
        }
    }

    return React.forwardRef((props: WrappedCompProps, ref) => {
        return <EnhancedComponent forwardedRef={ref} {...props} />;
    });
}

export default withResizeHoc;