import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Main from "./pages/Main/Main";
import Info from "./pages/Info/Info";
import Test from "./pages/Test/Test";
import Results from "./pages/Results/Results";
import Learn from "./pages/Learn/Learn";

const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
            <Route path = "/info" element = {<Info />}></Route>
            <Route path = "/test" element = { <Test />}> </Route>
            <Route path = "/results" element = {<Results />}></Route>
            <Route path = "/learn" element={<Learn />}></Route>
        </Routes>
    )
}

export default Router;