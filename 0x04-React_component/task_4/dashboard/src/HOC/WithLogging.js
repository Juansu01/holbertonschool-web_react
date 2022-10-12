import React from "react";

function withLogging(Component) {
    const componentName = Component.displayName || Component.name || "Component";

    class HOC extends React.Component {
        componentDidMount() {
            console.log(`Component ${componentName} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${componentName} is going to unmount`)
        }

        render() {
            return <Component {...this.props} />;
        }
    }
    HOC.displayName = `withLogging(${componentName})`;
    return HOC;
}

export default withLogging;