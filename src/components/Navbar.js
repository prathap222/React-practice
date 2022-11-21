import React from "react";
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

class Navbar extends React.Component{

  render(){



    return(
     <AuthContext.Consumer>{(authContext)=>{
      return(
       
        <ThemeContext.Consumer>{(themeContext)=>{
          const {isDarkTheme,darkTheme,lightTheme} = themeContext;
          const theme = isDarkTheme ? darkTheme : lightTheme;
          const{isLoggedIn, changeAuth } = authContext;
     
          return(
     
     
             <nav style={{color:theme.text , 
             background:theme.background , height:'120px'}} >
             <h2 className='ui centered header' style={{color:'grey'}}>
             Prathap's Planner
              </h2>
              <button className='ui three button primary' onClick={changeAuth} style={{textAlign: 'center'}} >{isLoggedIn ? 'User Logged in' : 'User logged out'}</button>
              <br></br>
               <div className='ui three button'>
               <button className='ui button'>Overview</button>
               <button className='ui button'>Contact</button>
               <button className='ui button'>Support</button>
               </div>
     
               </nav>
          )
         }}
     
           </ThemeContext.Consumer>
     

      )
     }
     }


     </AuthContext.Consumer>



      
    
    );
  }
};

export default Navbar;