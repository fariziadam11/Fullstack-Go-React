//import FC from react
import { FC, useState, useEffect, FormEvent } from "react";

//import SidebarMenu
import SidebarMenu from '../../../components/SidebarMenu';

//import useNavigate, useParams and Link from react-router
import { useNavigate, useParams, Link } from 'react-router-dom';

//import custom hook useUserByById
import { useUserById } from '../../../hooks/user/useUserById';

//import custom hook useUserUpdate
import { useUserUpdate } from '../../../hooks/user/useUserUpdate';

//import icons from react-icons
import { RiUserLine, RiMailLine, RiLockLine, RiArrowLeftLine } from 'react-icons/ri';

//interface for validation errors
interface ValidationErrors {
    [key: string]: string;
}

const UserEdit: FC = () => {

    //initialize useNavigate
    const navigate = useNavigate();

    //initialize useParams
    const { id } = useParams();

    //define state user
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    //define state errors
    const [errors, setErrors] = useState<ValidationErrors>({});

    // inisialisasi useUSerById
    const { data: user } = useUserById(Number(id));

    //set data user to state
    useEffect(() => {
        
        if (user) {
            setName(user.name);
            setUsername(user.username);
            setEmail(user.email);
        }
    }, [user]);

    // Inisialisasi useUserUpdate
    const { mutate, isPending } = useUserUpdate();

    // Handle submit form
    const updateUser = async (e: FormEvent) => {
        e.preventDefault();

        // Call the user update mutation
        mutate({
            id: Number(id),
            data: {
                name,
                username,
                email,
                password
            }
        }, {
            onSuccess: () => {

                // Redirect to users index
                navigate('/admin/users');

            },
            onError: (error: any) => {
                
                //set errors to state "errors"
                setErrors(error.response.data.errors);

            }
        })
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
                            <h2 className="mb-1">Edit User</h2>
                            <p className="text-muted mb-0">Update user information</p>
                        </div>
                        <Link 
                            to="/admin/users" 
                            className="btn btn-light d-flex align-items-center gap-2 rounded-4"
                        >
                            <RiArrowLeftLine className="fs-5" />
                            Back to Users
                        </Link>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-4">
                            <form onSubmit={updateUser}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label d-flex align-items-center gap-2">
                                                <RiUserLine className="text-primary" />
                                                Full Name
                                            </label>
                                            <input 
                                                type="text" 
                                                value={name} 
                                                onChange={(e) => setName(e.target.value)} 
                                                className={`form-control form-control-lg ${errors.Name ? 'is-invalid' : ''}`}
                                                placeholder="Enter full name" 
                                            />
                                            {errors.Name && (
                                                <div className="invalid-feedback">{errors.Name}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label d-flex align-items-center gap-2">
                                                <RiUserLine className="text-primary" />
                                                Username
                                            </label>
                                            <input 
                                                type="text" 
                                                value={username} 
                                                onChange={(e) => setUsername(e.target.value)} 
                                                className={`form-control form-control-lg ${errors.Username ? 'is-invalid' : ''}`}
                                                placeholder="Enter username" 
                                            />
                                            {errors.Username && (
                                                <div className="invalid-feedback">{errors.Username}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center gap-2">
                                        <RiMailLine className="text-primary" />
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className={`form-control form-control-lg ${errors.Email ? 'is-invalid' : ''}`}
                                        placeholder="Enter email address" 
                                    />
                                    {errors.Email && (
                                        <div className="invalid-feedback">{errors.Email}</div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center gap-2">
                                        <RiLockLine className="text-primary" />
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className={`form-control form-control-lg ${errors.Password ? 'is-invalid' : ''}`}
                                        placeholder="Enter new password (leave blank to keep current)" 
                                    />
                                    {errors.Password && (
                                        <div className="invalid-feedback">{errors.Password}</div>
                                    )}
                                    <small className="text-muted">Leave password blank if you don't want to change it</small>
                                </div>

                                <div className="d-flex gap-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-lg px-4 rounded-4" 
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Updating...
                                            </>
                                        ) : 'Update User'}
                                    </button>
                                    <Link 
                                        to="/admin/users" 
                                        className="btn btn-light btn-lg px-4 rounded-4"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserEdit