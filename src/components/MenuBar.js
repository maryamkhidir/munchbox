import React from 'react'
import {Toolbar,  AppBar} from '@material-ui/core';
import theme from "../assets/styles";
import Images from '../assets/imports'
import history from '../history';

function MenuBar(props) {

  return (
    <>
      <AppBar style={{...theme.defaultStyles.appBar, ...theme.home.appBar}} position="fixed">
        <Toolbar>
          <div onClick={() => history.push('/')} style={{...theme.defaultStyles.logo}}>
            <img src={Images.logo}height="28" alt="munchbox logo" />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default MenuBar