import { Box, IconButton, Stack, Typography } from '@mui/material'
import React,{useState} from 'react';
import { SideBarStyle } from './SideBarStyle';
import Logo from '../../assets/Logo';
import User from '../icons/User';
import People from '../icons/People';
import FeedBack from '../icons/FeedBack';
import LogOut from '../icons/Logout';
import Settings from '../icons/Settings';
import Notification from '../icons/Notification';

const items = [
    { icon: <User />, label: "Profile" },
    { icon: <People />, label: "Team" },
    { icon: <FeedBack />, label: "Feedback" },
    { icon: <Settings />},
    { icon: <Notification />},
    { icon: <LogOut />},
  ];

function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <Box sx={SideBarStyle.parent}>
        <Box sx={SideBarStyle.logoversion}>
        <Logo/>
        <Typography sx={SideBarStyle.version}>V 1.0.02</Typography>
        </Box>
        <Stack direction="column" spacing={2.5} sx={SideBarStyle.stack1}>
            {items.slice(0,3).map((item, index) => (
                <Box key={index} sx={SideBarStyle.stackitems}>
                <center><IconButton  sx={{
                    ...SideBarStyle.iconbutton,
                    backgroundColor: selectedIndex === index ? '#49c792' : '#30287E',
                  }}onClick={() => handleItemClick(index)}
                  >{item.icon}</IconButton></center>
                <Typography sx={SideBarStyle.icontext}>{item.label}</Typography>
                </Box>
            ))}
        </Stack>
        <Stack direction="column" spacing={2.5} sx={SideBarStyle.stack2}>
            {items.slice(3).map((item, index) => (
                <Box key={index} sx={SideBarStyle.stackitems}>
                <center><IconButton  sx={{
                    ...SideBarStyle.iconbutton,
                    backgroundColor: selectedIndex === index + 3 ? '#49c792' : '#30287E',
                  }}onClick={() => handleItemClick(index + 3)}
                  >{item.icon}</IconButton></center>
                <Typography sx={SideBarStyle.icontext}>{item.label}</Typography>
                </Box>
            ))}
        </Stack>
      </Box>
    </div>
  )
}

export default SideBar
