import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [showError, setShowError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);



    const handelSignIn = e => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        setShowError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess('Login Successful ')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setShowError(errorMessage)
            })


    }

    const handelResetPassword = () =>{
        console.log('reset now',emailRef.current.value)
        const email = emailRef.current.value;

        if(!email){
            setShowError('Please enter a valid email address.')
            console.log('please! provide valid email')
            return;
        }

        else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            setShowError("It should look like something@example.com")
        }
        sendPasswordResetEmail(auth,email)
        .then(() =>{
            alert('check your email')
        })
        .catch(error =>{
            const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setShowError(errorMessage)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mx-auto">
                <div className="hero-content w-10/12 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handelSignIn} className="card-body">
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name="email"
                                    ref={emailRef}
                                    required />
                            </div>
                            {/* password */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    className="input input-bordered"
                                    name="password"
                                    required />

                                <span onClick={() => setShowPassword(!showPassword)} className="text-center text-xl absolute right-3 top-12">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>

                                <label className="label">
                                    <Link 
                                    onClick={handelResetPassword}
                                    href="#" 
                                    className="label-text-alt link link-hover"
                                    >Forgot password?</Link>
                                </label>
                            </div>
                            {/* button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don`t have an account? <Link className="text-blue-600" to="/signup">SignUP</Link></p>
                        </form>
                        
                        {
                            showError && <p className="text-red-500">{showError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;