import React , {createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{

  state={
    isDarkTheme : false,
    darkTheme:{
      text:'#DDA0DD',
      background:'#8B008B'

    },
    lightTheme:{
      text:'grey',
      background:'#D3D3D3'

    },
  };

  changeTheme = ()=> {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
  }

  render(){
    return(
      
        <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
           {this.props.children}
        </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;