import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1, 1.5),
}));

const ToolbarTitle = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    color: 'black',
    textDecoration: 'none',
}));

function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <StyledAppBar position="static" elevation={0}>
                <Toolbar>
                    <ToolbarTitle variant="h6" component={NavLink} to="/" noWrap>
                        Ecom-Dashboard
                    </ToolbarTitle>
                    <nav>
                        <Button
                            color="black"
                            component={NavLink}
                            to="/register"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Register
                        </Button>
                    </nav>
                    <StyledButton
                        color="primary"
                        variant="outlined"
                        component={NavLink}
                        to="/login"
                    >
                        Login
                    </StyledButton>
                    <StyledButton
                        color="primary"
                        variant="outlined"
                        component={NavLink}
                        to="/logout"
                    >
                        Logout
                    </StyledButton>
                </Toolbar>
            </StyledAppBar>
        </React.Fragment>
    );
}

export default Header;
