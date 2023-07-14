import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)


const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault()


        const form = event.target
        const email = form.email.value
        const password = form.password.value

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('User has been created successfully')
        })
        .catch(error => {
            alert(`${error.message}`)
        })
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleRegister}>
                <div className="flex-col mt-5">
                    <label htmlFor="email">Email</label>
                    <input className='input-field' type="email" name="email" id="email" placeholder='Your Email' required />
                </div>
                <div className='flex-col mt-5'>
                    <label htmlFor="password">Password</label>
                    <input className='input-field' type="password" name="password" id="password" placeholder='Your Password' required />
                </div>
                <div className='text-center'>
                    <input className='login-btn' type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;