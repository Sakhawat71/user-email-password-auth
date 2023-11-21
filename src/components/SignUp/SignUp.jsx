import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handelOnSubmit = e => {
        e.preventDefault()
        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const password = e.target.user_password.value;
        const termsAccept = e.target.terms.checked;
        console.log(email, password, termsAccept)

        setSignUpError('');
        setSuccess('');
        if (password.length < 6) {
            setSignUpError("Password cannot be less than 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError("At least one uppercase letter is required")
            return;
        }
        else if (!termsAccept) {
            setSignUpError("Please, Accept transaction condition");
            return;
        }
        else if (!/^[a-zA-Z-' ]{3,}$/.test(name)) {
            setSignUpError("Name should be at least 3 characters.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Successfully registered')


                updateProfile(result.user, {
                    displayName: name,
                })
                    .then()
                    .catch()


                sendEmailVerification(result.user)
                    .then(() => {
                        alert('Email verification sent!')
                    })


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
                    type="taxt"
                    name="user_name"
                    id=""
                    placeholder="Your Name"
                    className=" input input-bordered input-primary "
                    required
                />
                <br />
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
                    <span onClick={() => setShowPassword(!showPassword)} className="text-center text-xl absolute right-3 top-3">
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                </div>

                <br />

                <div onClick={() => setIsChecked(!isChecked)} className=" my-2 flex items-center ">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="mr-2 cursor-pointer" />
                    <label
                        htmlFor="terms"
                        className="cursor-pointer">Accept our
                        <a className="text-blue-600 underline ml-1">terms and condition</a>
                    </label>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="btn text-white bg-sky-500 text-[16px]"
                />
                <p>already have account ? just <Link className="text-blue-600" to="/login">SignIn</Link></p>
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