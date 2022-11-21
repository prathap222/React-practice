import React , {createContext} from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component{

  state = {
    isLoggedIn : false

  };

  changeAuth = ()=> {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render(){
    return(
      <AuthContext.Provider value={{...this.state , changeAuth:this.changeAuth}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider;