import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpTodo(props) {

    const usersArr = props.usersArr;
    const setUsersArr = props.setUsersArr;
    const navigate = useNavigate()

    const [eUserName, setEUserName] = useState("");
    const [eUserPass, setEUserPass] = useState("");

    const handleUInput = (evt) => {
        setEUserName(evt.target.value);
    }

    const handlePInput = (evt) => {
        setEUserPass(evt.target.value);
    }

    const handleSignupUser = () => {
        const updateUsersArr = { uName: eUserName, uPassword: eUserPass }
        setUsersArr([...usersArr, updateUsersArr]);
        setEUserName("");
        setEUserPass("");
        navigate("/")
    }

    return (
        <div className="bg-black h-screen p-5 flex justify-center items-center">
            <div className="w-[350px] md:w-[400px] text-[14px] md:text-[16px] bg-white p-10 rounded">
                <h1 className="font-medium text-2xl">Hello you!</h1>
                <p className="text-[14px] md:text-[16px] py-2">I help you manage your activities after you login:)</p>
                <h1 className="text-xl text-center my-5">Sign Up</h1>
                <div className="flex flex-col gap-5 my-5">
                    <input type="text"
                        placeholder="Username"
                        onChange={handleUInput}
                        value={eUserName}
                        className="border border-black rounded p-2 bg-transparent focus:outline-none "
                    />
                    <input type="password"
                        placeholder="Password"
                        onChange={handlePInput}
                        value={eUserPass}
                        className="border border-black rounded p-2 bg-transparent focus:outline-none "
                    />
                    <input type="text"
                        placeholder="Confirm Password"
                        className="border border-black rounded p-2 bg-transparent focus:outline-none "
                    />
                </div>
                <button onClick={handleSignupUser} className="bg-orange-400 py-1 px-2 rounded">Sign Up</button>
                <p className="py-2">Already have an account? <Link to={"/"} className=" underline text-blue-800">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUpTodo