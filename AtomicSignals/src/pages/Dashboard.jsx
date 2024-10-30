import { Grid2, Typography,Box ,InputBase} from '@mui/material'
import React,{useState} from 'react';
import { DashboardStyle } from '../styles/DashboardStyle';
import SideBar from '../components/sidebar/SideBar';
import { SearchOutlined } from '@mui/icons-material';
import TickBoxChecked from '../assets/TickBox-Checked';
import GreenButton from "../components/buttons/GreenButton.jsx"
import ImportButton from '../components/buttons/ImportButton.jsx';
import Filter from '../components/icons/Filter.jsx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RowsDropDown from '../components/rowsdropdown/RowsDropDown.jsx';


function Dashboard() {
  return (
    <div>
      <Grid2 container sx={DashboardStyle.parent}>
        <Grid2 size={0.63} sx={DashboardStyle.sidebar}><SideBar/></Grid2>
        <Grid2 size={11.37} sx={DashboardStyle.content}>
          <Box sx={DashboardStyle.topcontents}>
            <Box sx={DashboardStyle.headBox}>
            <Typography sx={DashboardStyle.Heading}>Team members</Typography>
            </Box>
            
            <Box sx={DashboardStyle.topleftcontents}>
            <TickBoxChecked/>
            <Typography sx={DashboardStyle.Checkboxfiltration}>Show only my reportees</Typography>
            <Box sx={DashboardStyle.boxsearch}>
            <SearchOutlined style={DashboardStyle.searchicon} /> 
            <InputBase
              type="text"
              placeholder="Search by name, email"
              sx={DashboardStyle.inputbase}
              />
            </Box>
            <Box sx={DashboardStyle.Filterbutton}>
            <Filter/>
            </Box>
            <Box sx={DashboardStyle.importbutton}>
            <ImportButton/>
            </Box>
            <Box sx={DashboardStyle.greenbuttonholder}>
            <GreenButton greenbuttontext="Add member" />
            </Box>
            </Box>
          </Box>
          <Box sx={DashboardStyle.whitecontainer}>
            <Box sx={DashboardStyle.Containerhead}>
                Name
            </Box>
            <Box sx={DashboardStyle.Containerbody}>

            </Box>
            <Box sx={DashboardStyle.Containerfooter}>
                <Typography sx={DashboardStyle.rowsperpage}>Rows per page:</Typography>
                <RowsDropDown/>
                <Typography sx={DashboardStyle.pages}>1-10 of 12</Typography>
                <ChevronLeftIcon color="disabled"/>
                <ChevronRightIcon/>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default Dashboard
