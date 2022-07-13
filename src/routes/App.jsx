import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Home } from "@pages/Home";
import { PassRecovery } from '@pages/PassRecovery';
import { CreateAccount } from '@pages/CreateAccount';
import { MyAccount } from "@pages/myAccount";
import { MyOrderDetail } from "@pages/MyOrderDetail";
import { MyOrders } from "@pages/MyOrders";
import { SuccessEmail } from "@pages/SuccessEmail";
import { NotFound } from "@pages/NotFound";

import AppContext from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";

import '@styles/global.scss';
import '@styles/icon-styles.scss';


const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/password-recovery" element={<PassRecovery />} />
                    <Route exact path="/create-account" element={<CreateAccount />} />
                    <Route exact path="/my-account" element={<MyAccount />} />
                    <Route exact path="/my-orders" element={<MyOrders />} />
                    <Route exact path="/my-order/:id" element={<MyOrderDetail />} />
                    <Route exact path="/success-email" element={<SuccessEmail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };