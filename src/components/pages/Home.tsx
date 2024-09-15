import {memo,FC} from "react";
import { Outlet } from "react-router-dom";

export const Home:FC=memo(()=>{
    return (
    <div>
    <p>Homeページです</p>
    <Outlet />
    </div>
    );
});
