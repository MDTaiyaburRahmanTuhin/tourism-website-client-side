import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrderS from './MyOrderS';

const MyOrder = () => {
    const { users } = useAuth()
    const email = users?.email;
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://haunted-barrow-22037.herokuapp.com/myorder/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return (
        <div>
            <h2>My Orders{orders?.length}</h2>
            {
                orders?.map(order => <MyOrderS
                    order={order}
                    orders={orders}
                    setOrders={setOrders}
                ></MyOrderS>)
            }
        </div>
    );
};

export default MyOrder;