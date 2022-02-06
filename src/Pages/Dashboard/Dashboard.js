import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Drawers from './Drawers';
import AppBarDashboard from './AppBarDashboard';
import Contents from './Contents';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarDashboard></AppBarDashboard>
            <Drawers
                drawerWidth={drawerWidth}
                container={container}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            ></Drawers>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Contents></Contents>
            </Box>
        </Box >
    );
}


export default Dashboard;