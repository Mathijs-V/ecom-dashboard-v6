import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                await axiosInstance.post('user/logout/blacklist/', {
                    refresh_token: localStorage.getItem('refresh_token')
                });
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                axiosInstance.defaults.headers['Authorization'] = null;
                navigate('/login');
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        logout();
    }, [navigate]); // adding navigate as a dependency

    return <div>Logging out...</div>;
}
