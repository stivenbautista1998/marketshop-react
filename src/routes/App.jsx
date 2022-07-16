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
import { ProtectedRoute } from "@components/ProtectedRoute";

import AppContext from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";
import { useAuth } from "@hooks/useAuth";

import '@styles/global.scss';
import '@styles/icon-styles.scss';


const App = () => {
    const initialState = useInitialState();
    const { currentUser, setCurrentUser, validateUser, addNewUser } = useAuth();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/"
                        element={
                            <ProtectedRoute currentUser={currentUser}>
                                <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
                            </ProtectedRoute>
                        }
                    />
                    <Route exact path="/login"
                        element={<Login validateUser={validateUser} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
                    />
                    <Route exact path="/password-recovery" element={<PassRecovery />} />
                    <Route exact path="/create-account"
                        element={<CreateAccount validateUser={validateUser} addNewUser={addNewUser} />} 
                    />
                    <Route exact path="/my-account" 
                        element={
                            <ProtectedRoute currentUser={currentUser}>
                                <MyAccount />
                            </ProtectedRoute>
                        }
                    />
                    <Route exact path="/my-orders"
                        element={
                            <ProtectedRoute currentUser={currentUser}>
                                <MyOrders />
                            </ProtectedRoute>
                        }
                    />
                    <Route exact path="/my-order/:id"
                        element={
                            <ProtectedRoute currentUser={currentUser}>
                                <MyOrderDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route exact path="/success-email" element={<SuccessEmail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };