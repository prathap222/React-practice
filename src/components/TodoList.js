import React from "react";
import {ThemeContext} from '../contexts/ThemeContext';

class TodoList extends React.Component{

  static contextType = ThemeContext;

  render(){

    const {isDarkTheme,darkTheme,lightTheme, changeTheme} = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return(
      <div className='ui list' style={{color:theme.text , background:theme.background , height:'140px'}}>
        <p className='item'>Need to buy Tv</p>
        <p className='item'>Prepare for interview</p>
        <p className='item'>Plan for tour</p>
        <button className='ui button primary'onClick={changeTheme}>Change the theme</button>
      </div>
    )
  }
}

export default TodoList;