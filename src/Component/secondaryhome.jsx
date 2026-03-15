import React from "react";
import { Outlet } from "react-router";
import Navbar from "./nav";

function Secondaryhome(){
    return(
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    )
}
export default Secondaryhome;