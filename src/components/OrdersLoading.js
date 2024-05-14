import React from "react";

function OrdersLoading(Component) {
    return function OrdersLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{ fontSize: '25px' }}>
                We are waiting for the orders to load!...
            </p>
        );
    };
}
export default OrdersLoading;