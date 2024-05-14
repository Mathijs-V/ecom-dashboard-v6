import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel,
  Checkbox, Link, Grid, Typography, Container
} from '@mui/material';
import axiosInstance from '../axios';

export default function SignUp() {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post(`user/register/`, {
            email: formData.email,
            user_name: formData.username,
            password: formData.password,
        })
        .then((res) => {
            navigate('/login');
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div sx={{
                marginTop: 8, // using spacing from theme correctly in the sx prop
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form sx={{ width: '100%', mt: 3 }} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}  // Correct usage of sx with theme-dependent styles
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
