import { Outlet } from "react-router-dom";
import Menu from "./Shared/Components/Menu";
const Layout = () => {
    return (
        <section>
            <Menu />
            <Outlet />
        </section>
    )
}

export default Layout;