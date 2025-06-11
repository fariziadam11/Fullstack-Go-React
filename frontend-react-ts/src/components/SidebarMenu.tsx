//import FC from react
import { FC } from "react";

//import Link from react router dom
import { Link, useLocation } from "react-router-dom";

//import custom hook useLogout
import { useLogout } from "../hooks/auth/useLogout";

//import icons
import { 
    RiDashboardLine, 
    RiUserLine, 
    RiLogoutBoxLine 
} from 'react-icons/ri';

const SidebarMenu: FC = () => {
    const logout = useLogout();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const menuItems = [
        { path: "/admin/dashboard", label: "Dashboard", icon: RiDashboardLine },
        { path: "/admin/users", label: "Users", icon: RiUserLine },
    ];

    return (
        <div className="card border-0 rounded-4 shadow-sm h-100">
            <div className="card-header bg-primary text-white py-3">
                <h5 className="mb-0">MAIN MENU</h5>
            </div>
            <div className="card-body p-0">
                <div className="list-group list-group-flush">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 ${
                                isActive(item.path) ? 'active bg-primary bg-opacity-10 text-primary' : ''
                            }`}
                        >
                            <item.icon className="fs-5" />
                            {item.label}
                        </Link>
                    ))}
                    <button
                        onClick={logout}
                        className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 text-danger border-0"
                    >
                        <RiLogoutBoxLine className="fs-5" />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;