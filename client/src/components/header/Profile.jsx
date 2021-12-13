import { Typography, makeStyles, Menu , MenuItem} from "@material-ui/core";
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const useStyle = makeStyles({
    name:{
        color:'#002F34',
        fontWeight: 600,
        paddingRight: 40,
        cursor: 'pointer'
    },
    component:{
        marginTop: 30
    },
    logout:{
        marginLeft:10,
        fontSize: 15

    }
})




const Profile = ({ account, setAccount}) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const logout = () => {
        setAccount('');
    }

    return(
        <>
            <Typography onClick={handleClick} className={classes.name}>{account}</Typography>
            <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            className = {classes.component}
            >
                <MenuItem onClick={() => {handleClose(); logout();}}>
                    <PowerSettingsNewIcon fontSize="small"/>
                    <Typography className={classes.logout}>LogOut</Typography>
                    </MenuItem>
            </Menu>
      </>
    );
}

export default Profile;
