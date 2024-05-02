import Header from "../header/header";
import SideBar from "../sidebar/sideBar";
import Education from "../../component/education/education";
import "./home.scss";
import Project from "../../component/project/project";

const Home = () => {
  return (
    <div className="home-page">
      <div className="frist-part">
        <Header />
      </div>
      <div className="zero-part">
      <text className="part-header">Summary</text><br/>
        <p>a Proficient front-end developer effective at developing strong websites that achieve customer objectives.  Well-versed in using [HTML], [CSS], [javaScript], and work by framework [React]as well as other resources to accomplish design requirements.

        </p>
      </div>
      <div className="second-part">
        <div className="frist-element">
          <div className="education-part">
            <Education />
          </div>
          <div className="projects-part">
            <Project />
          </div>
        </div>
        <div className="second-element">
          <SideBar />
        </div>
      </div>
    </div>
  );
};
export default Home;

 
