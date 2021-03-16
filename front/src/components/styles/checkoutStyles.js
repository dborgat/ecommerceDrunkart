import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    form: {
        margin: theme.spacing(10,20,15,15),
    }
}));

export default useStyles