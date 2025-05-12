import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function LoginTodo(props) {

    const usersArr = props.usersArr
    const navigate = useNavigate()

    const [eUserName, setEUserName] = useState("");
    const [euserPass, setEUserPass] = useState("");
    const [rUser, setRUser] = useState(true);

    const handleUInput = (evt) => {
        setEUserName(evt.target.value);
    }

    const handlePInput = (evt) => {
        setEUserPass(evt.target.value);
    }

    const handleLoginUser = () => {
        let userFound = false;
        usersArr.forEach((item) => {
            if (eUserName.trim() === item.uName && euserPass.trim() === item.uPassword) {
                console.log("Login Success!")
                setRUser(true);
                userFound = true;
                navigate("/landing", {state:{user:eUserName}});
            }
        })
        setEUserName("");
        setEUserPass("");

        if(userFound === false){
                console.log("Failed!!");
                setRUser(false);
        }
    }



    return (
        <div className="bg-black h-screen p-10 flex justify-center items-center">
            <div className="w-[350px] md:w-[400px] text-[14px] md:text-[16px] bg-white p-10 rounded ">
                <h1 className="font-medium text-2xl">Hello you!</h1>

                {
                    rUser ? <p className="text-[14px] md:text-[16px]">I help you manage your activities after you login:)</p> : <p className="text-red-700">Please Sign Up before you Login!!</p>
                }

                <h1 className="text-xl text-center my-5">Login</h1>
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
                        value={euserPass}
                        className="border border-black rounded p-2 bg-transparent focus:outline-none "
                    />
                </div>
                <button className="bg-blue-600 px-3 py-1 text-white rounded" onClick={handleLoginUser}>Login</button>
                <p className="py-2">You have create an new account? <Link to={"/signuptodo"} className="underline text-blue-800">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default LoginTodo