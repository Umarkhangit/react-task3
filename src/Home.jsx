import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Home = () => {
    const drawerWidth = 200;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu,setOpenMenu] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const data = [
        {
            id:1,
            opportunity:"opportunity",
            client:"client",
            managed:"Danish",
            status:"Hot"
        },
        {
            id:2,
            opportunity:"opportunity",
            client:"client",
            managed:"Asif",
            status:"cold"
        },
        {
            id:3,
            opportunity:"opportunity",
            client:"client",
            managed:"Muzzaffar",
            status:"Hot"
        },
        {
            id:4,
            opportunity:"opportunity",
            client:"client",
            managed:"Nihal",
            status:"cold"
        },
        {
            id:5,
            opportunity:"opportunity",
            client:"client",
            managed:"Abbas",
            status:"Hot"
        },
        {
            id:6,
            opportunity:"opportunity",
            client:"client",
            managed:"Pritha",
            status:"cold"
        },
    ];

    const handleMenuOpen = () => {
        setOpenMenu(true)
    }

    const handleMenuClose = () => {
        setOpenMenu(false)
    }

    return (
        <div>

            {/* top nav */}
        <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background:"none"
            }}
        >
            <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:"black" }}
          >
            <MenuIcon />
            </IconButton>

            <IconButton>
                <SearchIcon/>
            </IconButton>

            <Divider orientation="vertical" flexItem />

            <TextField
            id="standard-required"
            label="Search..."
            variant="standard"
            sx={{ml:2}}
            />

             <div style={{marginLeft:"70%"}}> 
            <IconButton>
              <NotificationsNoneOutlinedIcon/>
            </IconButton>

            <IconButton sx={{ml:3}}>
              <AccountCircleIcon/>
            </IconButton>
            </div>

            </Toolbar>
        </AppBar>

        {/* side nav */}
         <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"#040d4d", color:"white" },
          }}
         style={{backgroundColor:"red"}} 
          
        >
            <center><h3>LOGO</h3></center>
            <Divider sx={{backgroundColor:"white"}}/>
          <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon sx={{color:"white"}}><HomeIcon/></ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </ListItemButton> 
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon sx={{color:"white"}}><GroupIcon/></ListItemIcon>
                    <ListItemText>Lead</ListItemText>
                </ListItemButton> 
            </ListItem>
          </List>
        </Drawer>
       
       {/* side nav responsive */}
        <Drawer
        //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:"#040d4d", color:"white"},
          }}
        >
           <center><h3>LOGO</h3></center>
            <Divider sx={{backgroundColor:"white"}}/>
          <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon sx={{color:"white"}}><HomeIcon/></ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </ListItemButton> 
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon sx={{color:"white"}}><GroupIcon/></ListItemIcon>
                    <ListItemText>Lead</ListItemText>
                </ListItemButton> 
            </ListItem>
          </List>
        </Drawer>

            <div style={{marginLeft:"250px",marginTop:"100px"}}>
                {/* <span style={{border:"2px solid black",padding:"10px",borderRadius:"20px"}}>IDEASSION</span>
                <span style={{border:"2px solid black",padding:"10px",borderRadius:"20px",marginLeft:"1000px", backgroundColor:"#040d4d", color:"white"}}>CREATE LEAD</span> */}
                <b><Chip label="IDEASSION" variant="outlined"/></b>
                <b><Chip label="CREATE LEAD" sx={{backgroundColor:"#040d4d",color:"white",marginLeft:"1000px"}}/></b>
            </div>

            <Card sx={{ml:"240px",marginTop:"40px",mr:3}}>
                <CardContent>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Leads</p>
                        <TextField id="outlined-basic" label="Search" variant="outlined"/>
                    </div>
                    
                    {/* table */}
                    <div>
                        <table style={{width:"100%"}}>
                            <tr className='tablehead'>
                                <td>ID</td>
                                <td>OPPORTUNITY</td>
                                <td>CLIENT</td>
                                <td>MANAGED BY</td>
                                <td>STATUS</td>
                                <td>TAGS</td>
                                <td>ACTION</td>
                            </tr>
                            {
                                data.map(val =>{
                                    return (
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.opportunity}</td>
                                            <td>{val.client}</td>
                                            <td>{val.managed}</td>
                                            <td><p className={val.status === "Hot"?"statusRed":"statusBlue"}>{val.status}</p></td>
                                            <td><Chip label="tags" sx={{backgroundColor:"#040d4d",color:"white"}}/>
                                            <Chip label="More tags" sx={{backgroundColor:"#040d4d",color:"white"}}/>
                                            <Chip label="+2" sx={{backgroundColor:"#040d4d",color:"white"}}/></td>
                                            <td><MoreVertIcon id="basic-button" onClick={handleMenuOpen}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>

                        <Menu
                        id="basic-menu"
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                        </Menu>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Home