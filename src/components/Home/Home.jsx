import { useSelector } from "react-redux";
import './Home.css'


const Home = () => {

    const count = useSelector(state => state.count)

    return (
        <div className="count-container">
            <h1 className="count">Count: {count}</h1>
        </div>
    );
};

export default Home;