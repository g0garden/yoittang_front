import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <p>could be main page :)</p>
        <Link to='/about'>About Yoittang!</Link>
      </div>
    );
  };
  
  export default Home;