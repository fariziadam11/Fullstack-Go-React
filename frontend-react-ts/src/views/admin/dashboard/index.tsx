//import FC from react
import { FC } from "react";

//import SidebarMenu
import SidebarMenu from '../../../components/SidebarMenu';

//import custom hook useAuthUser
import { useAuthUser } from '../../../hooks/auth/useAuthUser';
import { RiUserLine, RiFileListLine, RiSettingsLine } from 'react-icons/ri';

const Dashboard: FC = () => {
    const user = useAuthUser();

    const stats = [
        { title: "Total Users", value: "1,234", icon: RiUserLine, color: "primary" },
        { title: "Active Projects", value: "42", icon: RiFileListLine, color: "success" },
        { title: "Settings", value: "12", icon: RiSettingsLine, color: "info" },
    ];

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="mb-4">
                        <h2 className="mb-1">Welcome back, {user?.name || 'Guest'}!</h2>
                        <p className="text-muted">Here's what's happening with your projects today.</p>
                    </div>

                    <div className="row g-4 mb-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card border-0 rounded-4 shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className={`bg-${stat.color} bg-opacity-10 p-3 rounded-3 me-3`}>
                                                <stat.icon className={`text-${stat.color} fs-4`} />
                                            </div>
                                            <div>
                                                <h6 className="mb-0 text-muted">{stat.title}</h6>
                                                <h3 className="mb-0">{stat.value}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="card border-0 rounded-4 shadow-sm">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Recent Activity</h5>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item px-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="bg-primary bg-opacity-10 p-2 rounded-3">
                                                        <RiUserLine className="text-primary" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">New user registered</h6>
                                                    <small className="text-muted">2 minutes ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add more activity items here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 rounded-4 shadow-sm">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0">Quick Actions</h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary">Add New User</button>
                                        <button className="btn btn-outline-primary">View Reports</button>
                                        <button className="btn btn-outline-primary">Settings</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;