import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function DefaultLayout() {

    return (
        <>

            <AppHeader />

            <main className="p-3">
                <Outlet />
            </main>
        </>
    )
}