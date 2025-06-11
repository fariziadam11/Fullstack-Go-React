//import FC from react
import { FC } from "react";

//import SidebarMenu
import SidebarMenu from '../../../components/SidebarMenu';

//import Link from react-route
import { Link } from "react-router-dom";

//import custom hook useUsers and interface User
import { useUsers, User } from "../../../hooks/user/useUsers";

//import custom hook useUserDelete
import { useUserDelete } from "../../../hooks/user/useUserDelete";

//import query client TanStack Query
import { useQueryClient } from '@tanstack/react-query';

//import icons
import { RiAddLine, RiEditLine, RiDeleteBinLine, RiSearchLine } from 'react-icons/ri';

const UsersIndex: FC = () => {

    // get users from useUsers
    const { data: users, isLoading, isError, error } = useUsers();

    //initialize useQueryClient
    const queryClient = useQueryClient();

    //initialize useUserDelete
    const { mutate, isPending } = useUserDelete();

    //handle delete user
    const handleDelete = (id: number) => {
        if(confirm("Are you sure you want to delete this user?")) {
            
            //call useUserDelete
            mutate(id, {
                onSuccess: () => {
                    //refetch data
                    queryClient.invalidateQueries({ queryKey: ['users'] });
                }
            });
        }
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="mb-1">Users Management</h2>
                            <p className="text-muted mb-0">Manage your application users</p>
                        </div>
                        <Link 
                            to="/admin/users/create" 
                            className="btn btn-primary d-flex align-items-center gap-2 rounded-4 shadow-sm"
                        >
                            <RiAddLine className="fs-5" />
                            Add New User
                        </Link>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <RiSearchLine />
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control border-0 bg-light" 
                                            placeholder="Search users..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Loading State */}
                            {isLoading && (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Loading users...</p>
                                </div>
                            )}

                            {/* Error State */}
                            {isError && (
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="bi bi-exclamation-triangle-fill"></i>
                                    </div>
                                    <div>
                                        <h6 className="alert-heading mb-1">Error Loading Users</h6>
                                        <p className="mb-0">{error.message}</p>
                                    </div>
                                </div>
                            )}

                            {/* Users Table */}
                            {!isLoading && !isError && (
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle">
                                        <thead className="bg-light">
                                            <tr>
                                                <th scope="col" className="border-0">Full Name</th>
                                                <th scope="col" className="border-0">Username</th>
                                                <th scope="col" className="border-0">Email Address</th>
                                                <th scope="col" className="border-0 text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.map((user: User) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                                <span className="text-primary fw-bold">
                                                                    {user.name.charAt(0).toUpperCase()}
                                                                </span>
                                                            </div>
                                                            {user.name}
                                                        </div>
                                                    </td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td className="text-end">
                                                        <div className="btn-group">
                                                            <Link 
                                                                to={`/admin/users/edit/${user.id}`}
                                                                className="btn btn-light btn-sm rounded-3 me-2"
                                                                title="Edit User"
                                                            >
                                                                <RiEditLine className="fs-5" />
                                                            </Link>
                                                            <button 
                                                                onClick={() => handleDelete(user.id)} 
                                                                disabled={isPending}
                                                                className="btn btn-light btn-sm rounded-3 text-danger"
                                                                title="Delete User"
                                                            >
                                                                <RiDeleteBinLine className="fs-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersIndex