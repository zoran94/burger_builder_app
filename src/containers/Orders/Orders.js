import React, { Component } from "react";
import axios from "./../../axios-order";

import Order from "./../../components/Order/Order";
import { fetchOrders } from "./../../store/actions/order";
import { connect } from "react-redux"
import Spinner from "./../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }

    componentDidMount() {
        this.props.onFetchedOrders(this.props.token)
    }


    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                return (
                    <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                )
            })
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchedOrders: (token) => dispatch(fetchOrders(token))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Orders);