import app from '../../firebase/firebase.config';
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app)

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value


        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('User has been logged in successfully')
        })
        .catch(error => {
            alert(`${error.message}`)
        })
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleLogin}>
                <div className="flex-col mt-5">
                    <label htmlFor="email">Email</label>
                    <input className='input-field' type="email" name="email" id="email" placeholder='Your Email' />
                </div>
                <div className='flex-col mt-5'>
                    <label htmlFor="password">Password</label>
                    <input className='input-field' type="password" name="password" id="password" placeholder='Your Password' />
                </div>
                <div className='text-center'>
                    <input className='login-btn' type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;