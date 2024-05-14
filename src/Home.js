import React, { useEffect, useState } from "react";
import Orders from './components/Orders';
import OrderLoadingComponent from './components/OrdersLoading';
import './App.css';

function Home() {
    const OrderLoading = OrderLoadingComponent(Orders);
    const [appState, setAppState] = useState({
        loading: false,
        orders: null,
    });
    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://127.0.0.1:8000/api/`;
        fetch(apiUrl)
        .then((data) => data.json())
        .then((orders) => {
            setAppState({ loading: false, orders: orders });
        });
    }, [setAppState]);
    return (
        <div className="App">
            <h1>Latest orders</h1>
            <OrderLoading isLoading={appState.loading} orders={appState.orders} />
        </div>
    );
}

export default Home;
