
import React, {Component} from 'react'
import {connect} from 'react-redux'


export default(ChildComponent)=>{

  //Component
  
  class ComposedComponent extends Component {

    componentDidMount(){
      // is something inside of our global state for auth.
      this.isAuthenticated()
    }

    componentDidUpdate(){
      this.isAuthenticated()
    }

    isAuthenticated = () =>{
      if(!this.props.auth){  // the auth is checking our reducer auth to see if there is anything inside the auth. 

        this.props.history.push('/')  //redirection user to homepage when not logged in. 

      }
    }

    
    render() {

      return (
        <>
          <ChildComponent {...this.props}/>
        </>
      )
    }
  }

  const mapStateToProps = (state)=>{

    return{
      auth: state.auth
    }
  }

  return connect(mapStateToProps, null)(ComposedComponent)
}