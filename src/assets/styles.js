import {makeStyles} from '@material-ui/core';

const styles = {
  defaultStyles: {
    root: {
      flexGrow: 1
    },
    page: {
      marginTop: 74,
      padding: "10px 25px 0px 25px",
    },
    appBar: {
      height : 74,
      backgroundColor : "#072D7A",
      flexGrow:1,
      display: "flex",
      justifyContent: "center",
      boxShadow: "0px 18px 40px -12px rgba(0, 0, 0, 0.04)"
    },
    logo: {
      display:"flex",
      flexGrow:1,
      alignItems: "center",
      justifyContent:"center",
    },
    backLabel: {
      color: "#1D2432",
      fontSize: 18,
      fontWeight: 600,
      marginLeft: 20,
    },
    popup: {
      overlay: {
        backgroundColor: "rgb(50 50 53 / 45%)",
        zIndex: 1100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      content: {
        backgroundColor:"#FFFFFF", 
        border: 'unset',
        inset: 'unset',
        paddingHorizontal:18,  
        paddingBottom: 50,
        paddingTop: 10,
        borderRadius: 12,
        width: "calc( 100% - 50px )"
      }
    } 
  },
  home: {
    appBar: {
      backgroundColor : "#FFF"
    },
  }
}

export const useStyles = makeStyles({
  icon: {
    color: "#7E848F",
  },
  inputcontainer: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    border: "1px solid #C9D3E6 !important"
  },
  countryCodeContainer: {
    paddingRight:10
  },
  selected: {
    fontWeight:"500",
    fontSize: 14,
    letterSpacing:0.4
  },
  button:{
    backgroundColor: "#39C580",
    borderRadius: 16,
    height: 56,
    marginTop: 20,
    marginBottom: 20
  },
  buttonLabel:{
    textTransform:"none",
    fontSize:18,
    letterSpacing:0.4,
    fontWeight: 500
  },
  label: {
    fontWeight:500,
    fontSize: 14,
    lineHeight:"18px",
    color:"#1D2432", 
    fontFamily:"SFPro Normal"
    //opacity:0.32
  },
  checkboxLabel: {
    fontSize:12,
    color: "#000000"
  },
  checkboxStyle: {
    border:'0.7px solid #39C580',
    borderRadius:4
  },
  searchBar: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    border: "1px solid #C9D3E6 !important",
    height: 48,
  }
});

export default styles;