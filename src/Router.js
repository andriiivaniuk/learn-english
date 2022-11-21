import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Main from "./pages/Main/Main";
import Info from "./pages/Info/Info";
import Test from "./pages/Test/Test";

const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
            <Route path = "/info" element = {<Info />}></Route>
            <Route path = "/test" element = { <Test />}> </Route>
        </Routes>
    )
}

export default Router;