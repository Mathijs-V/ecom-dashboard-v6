import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

const Orders = ({ Orders }) => {
    const theme = useTheme();
    if (!Orders || Orders.length === 0) return <p>Cannot find any orders, sorry</p>;
    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {Orders.map((order) => (
                    <Grid item key={order.id} xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://source.unsplash.com/random"
                                alt="Image title"
                                sx={{ paddingTop: '56.25%' }} // 16:9 ratio
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                    sx={{ fontSize: '16px', textAlign: 'left' }}
                                >
                                    {order.title.substr(0, 50)}...
                                </Typography>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'baseline',
                                    fontSize: '12px',
                                    textAlign: 'left',
                                    marginBottom: theme.spacing(2),
                                }}>
                                    <Typography
                                        component="p"
                                        color="textPrimary"
                                    ></Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {order.excerpt.substr(0, 60)}...
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Orders;
