import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched
  };
})
export default class Layout extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }
  render(){
    const { user, tweets } = this.props;
    if (!tweets.length){
      return <button>load tweets</button>
    }
    return <div>{this.props.user.name}</div>;
  }  
}

