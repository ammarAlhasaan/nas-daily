import React, {useState} from 'react';
import './App.css';
import MainLayout from "./components/layouts/MainLayout";
import {BrowserRouter, Route} from "react-router-dom";

export const loading = (
    <div className="loader">
        <div className="loader"></div>
    </div>
)

function App(props: any) {
    return (
        <React.Suspense fallback={loading}>
            <BrowserRouter>
                <Route path="/" key="Site" render={props => <MainLayout title="main" {...props}/>} />
            </BrowserRouter>
        </React.Suspense>

    );
}

export default App;
