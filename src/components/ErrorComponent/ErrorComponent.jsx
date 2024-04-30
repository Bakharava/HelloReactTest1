import React from 'react';

class ErrorComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return <div>{this.props.children}</div>;
  }
}

export default ErrorComponent;
