import React from 'react';
import {AppBar, Hidden, Drawer, 
Divider, List, Toolbar, IconButton, 
Typography, ListItemIcon, ListItemText, ListItem, Box, Tooltip, Container} from '@material-ui/core';
import {Menu, Info, ContactMail, Create, Airplay, InsertChart, Settings, Person, ExitToApp, BorderColor, Dashboard} from '@material-ui/icons';
import useStyles from '../Styling';
import {Link} from 'react-router-dom'

const SideDrawer = ()=>{
    

    const [mobilScreen, setScreen] = React.useState(true);
    const classes = useStyles();

    const handleDrawer = ()=>{
        setScreen(!mobilScreen)
    }

    const drawer = (
        <div>
            <List>
                <Box className={classes.listHeader}><Typography>Menu</Typography></Box>
                <Link className={classes.listText} to='/add' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><Create className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>Insert Tips</ListItemText>
                </ListItem>
                </Link>
                <Link className={classes.listText} to='/view' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><Airplay className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>View Tips</ListItemText>
                </ListItem>
                </Link>
                <Link className={classes.listText} to='/manage' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><Settings className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>Manage Tips</ListItemText>
                </ListItem>
                </Link>
                <Link className={classes.listText} to='/stats' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><InsertChart className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>Statistics</ListItemText>
                </ListItem>
                </Link>
            </List>
            <Divider className={classes.divider} variant="middle"/>
            <List>
                <Box className={classes.listHeader}><Typography>User Profile</Typography></Box>
                <ListItem>
                    <ListItemIcon><Person className={classes.listIcon}/></ListItemIcon>
                    <ListItemText className={classes.listText}>User name</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BorderColor className={classes.listIcon}/></ListItemIcon>
                    <ListItemText className={classes.listText}>Edit Profile</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ExitToApp className={classes.listIcon}/></ListItemIcon>
                    <ListItemText className={classes.listText}>Log out</ListItemText>
                </ListItem>
            </List>
        </div>
    );
    
    const header = (
        <div>
            <Box display="flex" justifyContent="center" className={classes.mainHeader} boxShadow={3}>
                <Typography variant="h6">Gurshaye</Typography>
            </Box>
        </div>);
    
    const dashBoard = (
        <div>
            <List>
                <ListItem>
                    <ListItemIcon><Dashboard className={classes.IconColor}/></ListItemIcon>
                    <ListItemText style={{color: 'white'}}>Dashboard</ListItemText>
                </ListItem>
            </List>
            <Divider className={classes.divider} variant="middle"/>
        </div>
    )

    return(
        <div>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuButton} onClick={handleDrawer}><Menu/></IconButton>
                    <Box flexGrow={1} display="flex" flexDirection="row-reverse">
                        <Tooltip title="About Us" arrow><IconButton><Info/></IconButton></Tooltip>
                        <Tooltip title="Contact Us" arrow><IconButton><ContactMail/></IconButton></Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        variant='temporary'
                        open={mobilScreen}
                        onClose={handleDrawer}
                        classes = {{paper: classes.drawerPaper}}
                    >
                        {header}
                        {dashBoard}
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden smDown>
                    <Drawer
                        variant='permanent'
                        open
                        classes = {{paper: classes.drawerPaper}}
                    >
                        {header}
                        {dashBoard}
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default SideDrawer