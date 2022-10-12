import React from "react";

function withLogging(component) {
    const componentName = component.displayName || component.name || "Component";

    class HOC extends React.Component {
        componentDidMount() {
            console.log(`Component ${componentName} is mounted`)
        }

        componentWillMount() {
            console.log(`Component ${componentName} is going to mount`)
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    HOC.displayName = `withLogging(${componentName})`;
    return HOC;
}

export default withLogging;