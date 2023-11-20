
const SignUp = () => {

    const handelOnSubmit = e =>{
        e.preventDefault()
        const email = e.target.user_email.value;
        const password = e.target.user_password.value;
        console.log(email,password)
    }

    return (
        <div className="text-center ">
            <h2 className="text-3xl">Please SignUp</h2>
            
            <form onSubmit={handelOnSubmit} className=" py-5 space-y-3 my-2">
                <input 
                type="email" 
                name="user_email" 
                id="" 
                placeholder="Email"
                className=" input input-bordered input-primary "
                />
                <br />

                <input 
                type="password" 
                name="user_password" 
                id="" 
                placeholder="Password"
                className=" input input-bordered input-primary "
                />
                <br />

                <input 
                type="submit" 
                value="Submit"
                className="btn text-white bg-sky-500 text-[16px]" 
                />
            </form>

        </div>
    );
};

export default SignUp;