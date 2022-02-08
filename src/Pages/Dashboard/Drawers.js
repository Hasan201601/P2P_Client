import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DrawerContent from './DrawerContent';

const Drawers = ({ drawerWidth, container, mobileOpen, handleDrawerToggle }) => {
    return (
        <Box
            component="nav"
            sx={{
                width: { sm: drawerWidth }, flexShrink: { sm: 0 }
            }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: "20px" },
                }}
            >
                <DrawerContent></DrawerContent>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: "20px" },
                }}
                open
            >
                <DrawerContent></DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Drawers;