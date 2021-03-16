import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:'5%',
        marginBottom:'5%',
        height: '200%',
        marginLeft:'8%'
    },
    title: {
        marginTop: '7%',
        marginLeft:'3%'
    },
    roow:{
        marginTop:"4%",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center'

    },

    cardd:{
    display:'flex',
    height:'20%',
    width:'40%',
    justifyContent:'center',
    
    },
}));

export default useStyles