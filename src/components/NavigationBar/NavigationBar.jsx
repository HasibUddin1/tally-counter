import { Link } from "react-router-dom";
import './NavigationBar.css'


const NavigationBar = () => {
    return (
        <div className="nav-container">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default NavigationBar;