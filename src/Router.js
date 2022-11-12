import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Main from "./pages/Main/Main";
import Info from "./pages/Info/Info";

const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
            <Route path = "/info" element = {<Info />}></Route>
        </Routes>
    )
}

export default Router;