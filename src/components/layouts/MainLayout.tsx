import React, {FunctionComponent} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter, Route} from "react-router-dom";
import routes from "../../routes";
import {loading} from "../../App";

type MainLayoutProps = {
    title: string,
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({title, children}) => <div>
    <Header title="Header"/>
    <React.Suspense fallback={loading}>
        <BrowserRouter>
            <div>
                {routes.map((route, idx) => {
                    return <Route key={route.name} path={route.path} exact={route.exact}
                                  component={route.component}/>

                })}
            </div>
        </BrowserRouter>
    </React.Suspense>
    <Footer title="Footer"/>
</div>

export default MainLayout
