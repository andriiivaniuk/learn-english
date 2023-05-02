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
import NotFound from "./components/NotFound/NotFound";

const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
            <Route path = "/info" element = {<Info />}></Route>
            <Route path = "/test" element = { <Test />}> </Route>
            <Route path = "/results" element = {<Results />}></Route>
            <Route path = "/learn" element={<Learn />}></Route>
            <Route path = "*" element={<NotFound />}></Route>
        </Routes>
    )
}

export default Router;