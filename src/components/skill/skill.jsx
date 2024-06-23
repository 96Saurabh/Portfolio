import "./skill.css";
// import Award from "../../img/award.png";

const Skill = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://emeritus.org/wp-content/uploads/2024/02/AI-Skills.jpg.optimal.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.<br/><br/>
          Profile:DevOps Engineer, Software Developer, Backend Developer<br/><br/>
          Domain:  Retail, Ecommerce, BFSI & Digital Marketing<br/><br/>
          Education: Post Graduate Diploma in Computer Application,Bachelor of Technology<br/><br/>
          Language: English, Hindi<br/><br/>
          DevOps:Docker, AWS ECS,Elastic Container Service, EC2, Lightsail, Lambda, Serverless Application Repository ,AWS Amplify, Elastic Kubernetes<br/><br/>
          Other Skills: Cloud, Excel, Git, JIRA, Google Analytics & SEO


        </p>
        
      </div>
    </div>
  );
};

export default Skill;
