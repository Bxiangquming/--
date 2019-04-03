import React, { Component } from 'react';
import DateSource from '../DateSource/DateSource'

function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: selectData(DateSource, props)
        };
      }
  
      componentDidMount() {
        DateSource.addChangeListener(this.handleChange);
      }
  
      componentWillUnmount() {
        DateSource.removeChangeListener(this.handleChange);
      }
  
      handleChange() {
        this.setState({
          data: selectData(DateSource, this.props)
        });
      }
  
      render() {
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  }
  export default withSubscription;