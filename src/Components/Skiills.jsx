import React from "react";
import "./Skills.scss";

const Skills = ({ refe }) => {
  const skillData = [
    {
      category: "Deep Learning",
      items: [
        "TensorFlow & Keras",
        "Artifitial Neural Networks (ANNs)",
        "Convolutional Neural Networks (CNNs)",
        "Multi-Task Learning (Regression & Classification)",
        "Data Augmentation (Flip, Rotation, Zoom)",
        "Batch Normalization & Dropout",
        "Transfer Learning",
        "Model Callbacks (EarlyStopping, ReduceLROnPlateau)",
      ],
    },
    {
      category: "Machine Learning",
      items: [
        "XGBoost & Scikit-learn",
        "Regression & Classification",
        "Feature Engineering (Lagged & Rolling Features)",
        "Temporal Train/Test Splits",
        "Data Leakage Detection (Permutation Testing)",
        "Hyperparameter Tuning (GridSearchCV, TimeSeriesSplit)",
        "Model Evaluation (MAE, RMSE, R², Spearman)",
      ],
    },
    {
      category: "Languages",
      items: ["Python", "C", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Backend & APIs",
      items: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "REST APIs",
        "Nodemon",
      ],
    },
    {
      category: "Frontend & UI",
      items: [
        "React",
        "SCSS / CSS3",
        "Responsive Design",
        "SweetAlert2",
        "User-centric workflows",
      ],
    },
    {
      category: "Data",
      items: [
        "Pandas, NumPy",
        "EDA & Data Cleaning",
        "Image Processing (Pillow)",
        "Parquet, Jupyter",
        "Hugging Face Datasets",
      ],
    },
    {
      category: "Workflow & Debugging",
      items: [
        "Data Pipeline Debugging (Shape Mismatches)",
        "Route consistency",
        "Middleware integration",
        "Error handling",
        "Transparent admin panels",
        "Safe deletion/disapproval flows",
      ],
    },
    {
      category: "Tools & Deployment",
      items: [
        "Git & GitHub",
        "Streamlit",
        "Vercel & Netlify",
        "Streamlit Cloud & Render",
        "Hugging Face (Model Hosting)",
        "Postman",
        "VS Code",
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
