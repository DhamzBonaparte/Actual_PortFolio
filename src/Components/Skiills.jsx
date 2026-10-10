import React from "react";
import "./Skills.scss";

const Skills = ({ refe }) => {
  const skillData = [
    {
      category: "Languages",
      items: ["C", "JavaScript", "Python", "HTML5", "CSS3"],
    },
    {
      category: "Machine Learning",
      items: [
        "XGBoost & Scikit-learn",
        "Regression & Classification",
        "Feature Engineering (Lagged & Rolling Features)",
        "Temporal Train/Test Splits",
        "Data Leakage Detection",
        "Hyperparameter Tuning (GridSearchCV, TimeSeriesSplit)",
        "Model Evaluation (MAE, RMSE, R²)",
      ],
    },
    {
      category: "Backend & Debugging",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Nodemon",
      ],
    },
    {
      category: "Frontend & UI",
      items: [
        "React",
        "SCSS",
        "Responsive Design",
        "SweetAlert2",
        "User-centric workflows",
      ],
    },
    {
      category: "Workflow & Debugging",
      items: [
        "Route consistency",
        "Middleware integration",
        "Error handling",
        "Transparent admin panels",
        "Safe deletion/disapproval flows",
      ],
    },
    {
      category: "Data",
      items: [
        "Pandas, NumPy",
        "EDA & Data Cleaning",
        "Feature Engineering",
        "Parquet, Jupyter",
      ],
    },
    {
      category: "Tools & Deployment",
      items: [
        "Git & GitHub",
        "Streamlit",
        "FastAPI",
        "Vercel, Streamlit Cloud",
        "Hugging Face (model hosting)",
        "Git/GitHub",
        "Postman",
        "VS Code",
        "Netlify",
        "Axios",
      ],
    },
  ];

  return (
    <section className="skills-card" ref={refe}>
      <div className="skills-card__header">
        <h2 className="skills-card__title">Skills</h2>
        <div className="skills-card__icon-stack">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="skills-card__content">
        {skillData.map((group, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-group__label">{group.category}</h3>
            <div className="skill-group__list">
              {group.items.map((skill, i) => (
                <div key={i} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
