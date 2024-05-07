import "./project.scss";

const Project = () => {
  return (
    <div className="project-page">
      <div className="project-page-header">Projects</div>
      <div className="projects-data">
        <div className="frist-project">
          <text className="project-header">Ecommerce</text>
          <div className="project-details">
            <text>Full Stack application with the MERN stack</text>
            <br />
            <text>project Link : https://ecommerce-ana1.web.app/</text>
            <br />
            <text>
              - This application can be used as a client or administrator
            </text><br/>
            <text>- Application Feature:-</text>
            <br />

            <ol>
              Client Side:-
              <li>Add product  to Wishlist.</li>
              <li>After Make Order Find it in list order .</li>
              <li>Add Review About Product.</li>
            </ol>
            <ol>
              Administrator Side:-
              <li>
                At DashBoard find data about Orders Daily, weekly, monthly.
              </li>
              <li>Add products and the ability to modify them.</li>
              <li>Follow up on orders and details about them.</li>
              <li>The ability to add an email as an administrator.</li>
              <li>Choose a product as the interface for the Application.</li>
            </ol>
          </div>
        </div>
        <div className="second-project">
        <text className="project-header">Share Places</text>
          <div className="project-details">
            <text>Full Stack application with the MERN stack</text>
            <br />
            <text>project Link : https://share-places-an9875.web.app</text>
            <br />
            <text>- Application Feature:-</text>
            <br />
             <ol>
             <li>Share the place with others.</li>
              <li>The ability to upload an image of place.</li>
             </ol>
            </div>
        </div>
        <div className="thired-project">
        <text className="project-header">Crown Clothes</text>
          <div className="project-details">
            <text>Frontend Application</text>
            <br />
            <text className="last">project Link : https://crown-2024.web.app/</text>
            <br />
            </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
