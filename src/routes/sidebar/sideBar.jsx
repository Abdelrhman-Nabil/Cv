import "./sideBar.scss";

const SideBar = () => {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "Redux",
    "Firebase",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Git:Github",
  ];
  const Languages=["English : Good",'Arabic : Mother tongue']
  return (
    <div className="side-bar">
      <div className="header">
        <text className="header-text">Personal Details</text>
      </div>
      <div className="personal-data">
        <div className="info">
          <text className="label">Date of Birth</text>
          <text className="data-text">05/07/1998</text>
        </div>
        <div className="info">
          <text className="label">Nationality</text>
          <text className="data-text">Egyptian</text>
        </div>
        <div className="info">
          <text className="label">Military service</text>
          <text className="data-text">performed</text>
        </div>
        <div className="info">
          <text className="label">Website</text>
          <text className="data-text">https://portfolio-an9875.web.app</text>
        </div>
        <div className="info">
          <text className="label">linkedin</text>
          <text className="links data-text">
            https://www.linkedin.com/in/abdelrahman-nabil-547969304
          </text>
        </div>
      </div>
      <div className="skills">
        <div className="header">
          <text className="header-text">Skills</text>
        </div>
        <div>
        <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Lang">
        <div className="header">
        <text className="header-text">Languages</text>
        </div>
        <div>
        <ul>
            {Languages.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};
export default SideBar;
