import {memo,FC} from "react";
import { Route,Routes} from "react-router-dom";
import { Login } from "../components/pages/Login"; 
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";

export const Router:FC=memo(()=>{
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {homeRoutes.map((route)=>(
                    <Route 
                    key={route.path} 
                    path={route.path}
                    element={route.element}
                    />
            ))}
            
                    {/* 404 Not Found */}
                    <Route path="*" element={<Page404 />} /> 
                    </Routes>
    );
});