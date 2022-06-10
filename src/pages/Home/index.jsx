import Nav from "../../components/layout/Nav";
import Question from "../../components/question";
import Auth from "../../pages/Login/Login";

function Home() {
  
    return ( 
        <div className="home">
              <Auth/>
              <Nav />
              <Question/>
        </div>
     );
}

export default Home;