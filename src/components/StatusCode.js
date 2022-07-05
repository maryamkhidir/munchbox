import React from 'react';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import history from '../history';
import Images from '../assets/imports'


const GoBack = props => {
	return(
    <AppBar style={theme.appBar} position="fixed">
      <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
        <IconButton onClick={() => history.goBack()} edge="start" color="inherit" aria-label="menu">
          <ArrowBackIcon style={{color:'#000', marginRight:15}} />
          <div style={theme.logo}>Back</div>
        </IconButton>
        <IconButton style={{}} aria-label="search" color="inherit">
        </IconButton>
      </Toolbar>
    </AppBar>
)
}

const ComingSoonResponse = props => {
	return(
		<React.Fragment>
			<img src={Images.comingsoon} alt="coming soon" style={{width:216, height:164, marginBottom:21}} />
			<div style={{fontSize:16, color:'#6A6B6C', textAlign:'center', marginBottom:20}}>This feature is coming soon</div>
		</React.Fragment>
	)
}


const StatusCodePage = props => {
	return (
    <div style={theme.root}>
        <GoBack />
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
          <ComingSoonResponse />
        </div>
    </div>
  )
}

const theme = {
	root: {
		flexGrow: 1,
		minHeight:'100vh',
	},
	appBar: {
		height : 64,
		backgroundColor : "#FFF",
		flexGrow: 1,
    boxShadow: "0px 18px 40px -12px rgba(0, 0, 0, 0.04)"
	},
	logo: {
		display:"flex",
		flexGrow:1,
		alignItems: "center",
		textAlign: "center",
		justifyContent:"center",
		fontSize:18,
		fontWeight:600,
		color:'#1D2432'
		
	}
};

export default StatusCodePage