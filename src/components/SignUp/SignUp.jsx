import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handelOnSubmit = e => {
        e.preventDefault()
        const email = e.target.user_email.value;
        const password = e.target.user_password.value;

        setSignUpError('');
        setSuccess('');
        if (password.length < 6) {
            setSignUpError("Password cannot be less than 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError("At least one uppercase letter is required")
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Successfully registered')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setSignUpError(errorMessage)
            })

    }

    return (
        <div className="text-center ">
            <h2 className="text-3xl">Please SignUp</h2>

            <form onSubmit={handelOnSubmit} className=" py-5 my-2 flex flex-col justify-center items-center">
                <input
                    type="email"
                    name="user_email"
                    id=""
                    placeholder="Email"
                    className=" input input-bordered input-primary "
                    required
                />
                <br />

                <div className="relative">
                    <input
                        type={showPassword ? "password" : "text"}
                        name="user_password"
                        id=""
                        placeholder="Password"
                        className=" input input-bordered input-primary "
                        required
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className="text-center text-2xl absolute right-3 top-3">
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                </div>

                <br />

                <input
                    type="submit"
                    value="Submit"
                    className="btn text-white bg-sky-500 text-[16px]"
                />
            </form>
            {
                signUpError && <p className="text-red-500">{signUpError}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            }

        </div>
    );
};

export default SignUp;