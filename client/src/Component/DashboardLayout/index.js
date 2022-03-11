import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import{ MdMenu as  MenuIcon} from 'react-icons/md';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Avatar, Stack, styled } from '@mui/material';
// import Logo from 'Components/Logo';
import NavSection from './NavSection';
import { alpha } from "@mui/material/styles";

const drawerWidth = 240;

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: "15px",
  backgroundColor: theme.palette.grey[200]
}));

// const account = {
//   displayName: 'Sameep Vishwakarma',
//   email: 'contact@sameepvishwakarma.com',
//   photoURL: 'https://m.media-amazon.com/images/I/41hmyB0fe2L._UXNaN_FMjpg_QL85_.jpg',
//   role:"Neurologist"
// };

function DashboardLayout(props) {
  const { window, children, sidebarConfig ,account} = props;
  console.log(props);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={Link} to="/" sx={{ display: 'inline-flex', margin: '0px 45px' }}>
          {/* <Logo /> */}
        </Box>
      </Box>
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <AccountStyle>
          <Avatar src={account.photoURL} alt="photoURL" />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              {account.displayName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {account.role}
            </Typography>
          </Box>
        </AccountStyle>
      </Box>
      <NavSection navConfig={sidebarConfig} />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        variant="outlined"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          border: 'none',
          background: 'none',
          padding: '0px 24px',
          backgroundColor: (theme) =>
            alpha("#f6f8fb", 0.60),
          backdropFilter: "blur(6px)",
        }}
      >
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            {/* Appbar */}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, boxShadow: '4px 0 16px 0 rgba(16, 30, 115, 0.08)' }}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, background: '#f6f8fb', minHeight: '100vh' }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

DashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardLayout;
