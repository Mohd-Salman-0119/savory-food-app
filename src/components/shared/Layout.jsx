import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../miscellaneous/Sidebar";
import HeaderNavbar from "../miscellaneous/HeaderNavbar";
import DrawerContainer from "../DrawerContainer";

const Layout = () => {
    return (
        <div className="flex flex-row bg-secondary h-svh w-full overflow-hidden">
            <Sidebar />

            <div className="p-4 w-full overflow-scroll">
                <HeaderNavbar />
                <DrawerContainer />

                <div>{<Outlet />}</div>
            </div>
        </div>
    );
};

export default Layout;
