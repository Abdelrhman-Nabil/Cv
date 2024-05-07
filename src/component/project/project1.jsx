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
            <text>project Link : https://ecommerce-ana1.web.app</text>
              <p>
              The application has two uses: as a client or as an administrator.
     <br/><text className="header-text">From an customer's perspective:-</text>The user creates an account and browses the products with the ability to add the product to the wish list. The customer can place an order by adding the product to the shopping cart and proceeding to complete the purchase process.
              </p>
              <p><text className="header-text">From an administrator's perspective:-</text>The administrator adds products and has the ability to modify them.
     In the DashBoard you can review your purchases on a daily, weekly and annual basis
       On the orders page, customers’ orders are collected in a table showing the type of products, date of purchase, and address.
              </p>
              <p>save all data such as products , admins data,client data on MongoDB
              Authentication with json web token and express-validators and bcrypt
              </p>
                
          </div>
        </div>
        <div className="second-project">
        <text className="project-header">Share Places</text>
          <div className="project-details">
          <text>Full Stack application with the MERN stack</text>
          <br />
            <text>project Link : https://share-places-an9875.web.app</text>
            <br />
            <p>
            mern stack app where a user create account and share places and watch other app users places, save users data such as profile photo ,photo of the places and the address of place  to mongoDb,
Authentication with json web token and express-validators and bcrypt
            </p>
            </div>
        </div>
        <div className="thired-project">
        <text className="project-header">Crown Clothes</text>
          <div className="project-details">
          <text>Frontend Application</text>
            <text className="last">project Link : https://crown-2024.web.app<br/></text>        
            <br />
            <p>Client side e-commerce app built using React. Firebase was used to authentication and used as database server to save data on it ,Handling State Management with Redux
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
