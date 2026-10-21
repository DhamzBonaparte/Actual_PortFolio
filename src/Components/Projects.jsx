import React, { useEffect } from "react";
import { Typography, Chip, Card, CardMedia, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import receipe from "../assets/receip2.png";
import "./projects.scss";
import multiple from "../assets/multiple.png";
import expenseTracker from "../assets/exp-track.png";
// Import image correctly
import futhub from "../assets/futhub.png";
import fpl from "../assets/fpl.png";
import titanic from "../assets/titanic_vert.png";
import aakarshan from "../assets/aakarshan.png";
import worldcup from "../assets/worldcup.png";
import mlAlgorithms from "../assets/ml-algorithms.png";
import spam from "../assets/spam.png";
import sleep from "../assets/sleep.png";
import catsVsDogs from "../assets/dogvcat.png";
import multitaskAgeGender from "../assets/multitask.png";

const projectData = [
  {
    title: "FutHub - Futsal Booking Platform",
    description:
      "A professional, full-stack application designed to connect among futsal players and futsal owners. Features transparent admin workflows, booking logic, and user feedback.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "SCSS",
      "REACT",
      "MongoDB",
      "SweetAlert",
      "Nodemon",
      "HTML",
      "Material UI",
    ],
    image: futhub,
    github: "https://github.com/DhamzBonaparte/FutHub",
    live: "https://futhub.netlify.app/",
  },
  {
    title: "Multi-Task Face Analysis CNN",
    description:
      "A deep learning model built from scratch using the Keras Functional API that simultaneously performs age regression and gender classification on facial images. Features a shared Convolutional base that splits into two distinct output branches, utilizing tf.data pipelines, Data Augmentation, and ReduceLROnPlateau.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Pillow",
      "Google Colab",
    ],
    image: multitaskAgeGender, // Replace with your actual image variable
    github: "https://github.com/DhamzBonaparte/Multitask-Face-Analysis-CNN",
    live: null,
    isfeatured: true,
  },
  {
    title: "FPL Top-5 Player Recommender",
    description:
      "End-to-end ML pipeline predicting Fantasy Premier League player points from ~30k player-gameweek records. Engineered lagged form features, identified and removed three data leakage sources (verified with a label permutation test, shuffled R² = −0.04), and deployed as an interactive Streamlit app returning top-5 recommendations by budget, position, and gameweek.",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas", "Joblib"],
    image: fpl,
    github:
      "https://github.com/DhamzBonaparte/Premier-League-FPL-Suggestion-Model",
    live: "https://premier-league-fpl-suggestion-model-fccybpydfqgkdmufvxm4hy.streamlit.app/",
    isfeatured: true,
  },
  {
    title: "Screentime & Sleep Quality Predictor",
    description:
      "Classification and regression models predicting sleep quality from daily activity, caffeine intake, REM/deep sleep, and related metrics. Served via FastAPI and deployed with a React frontend. Evaluated with R², MAE, MSE (regression) and accuracy, precision, recall (classification).",
    tech: ["Python", "XGBoost", "Scikit-learn", "FastAPI", "React"],
    image: sleep,
    github: "https://github.com/DhamzBonaparte/Screentime-Analyzer",
    live: "https://screentime-screen-analyzer.vercel.app/",
    isfeatured: true,
  },
  {
    title: "Cats vs Dogs CNN Classifier",
    description:
      "An image classification model built from scratch to distinguish between cats and dogs by implementing a custom tf.data generator pipeline, Data Augmentation to prevent overfitting, and EarlyStopping/LR scheduling to achieve 90% validation accuracy.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pillow",
      "Hugging Face Datasets",
      "Google Colab",
    ],
    image: catsVsDogs,
    colab:
      "https://colab.research.google.com/drive/1YLLqcEtCcir1z1S28PHUsyWG87Sy1OcT",
    live: null,
    isfeatured: true,
  },
  {
    title: "Spam Email Classifier",
    description:
      "Text classification model to detect spam emails, comparing Logistic Regression, Naive Bayes, and Random Forest. Best model achieved 97% accuracy and 100% precision on 5,572 labeled emails. Deployed as an interactive Streamlit app for real-time prediction.",
    tech: ["Python", "Scikit-learn", "Streamlit", "NLP"],
    image: spam,
    github: "https://github.com/DhamzBonaparte/Spam-Classifier",
    live: "https://spam-classifier-6iwi.onrender.com/",
    isfeatured: true,
  },
  {
    title: "ML-Algorithms Suite",
    description:
      "A collection of machine learning implementations built from scratch to deepen understanding of core algorithms. Includes Linear Regression, Multiple Linear Regression, Gradient Descent (Batch, Stochastic, Mini-batch), and Ridge Regression. Designed with clear mathematical derivations, intuitive workflows, and hands-on coding to bridge theory with practice.",
    tech: [
      "Python",
      "NumPy",
      "pandas",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    image: mlAlgorithms,
    github: "https://github.com/DhamzBonaparte/ML-Algorithms",
    live: "",
    isfeatured: true,
  },
  {
    title: "Aakarshan – Canvas Store",
    description:
      "A full‑stack online platform for selling custom canvas art and paintings. It features a modern storefront, secure payments, and a powerful admin panel for managing products, orders, and customer uploads. Designed to help artists and businesses showcase their work with clarity and scalability.",
    tech: [
      "JavaScript",
      "React",
      "SCSS",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: aakarshan,
    github: "https://github.com/DhamzBonaparte/Aakarshan",
    live: "https://aakarshann.netlify.app/",
    isfeatured: true,
  },
  {
    title: "FIFA World Cup Dataset",
    description:
      "Comprehensive dataset covering FIFA World Cup statistics from 1930 onwards, including matches, goals, attendance, and team performance. Built for analysis, visualization, and predictive modeling.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
    image: worldcup,
    kaggle:
      "https://www.kaggle.com/datasets/sulavdhami/worldcup-matches-1930-2022",
    isfeatured: true,
  },
];

const Projects = ({ refe }) => {
  return (
    <>
      <section className="projects-section" ref={refe}>
        <div className="section-header">
          <Typography variant="h2" className="header-text">
            Projects
          </Typography>
        </div>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <Card key={index} className={`project-card featured`} elevation={0}>
              <div className="image-wrapper">
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.live && <span className="live-badge">LIVE DEMO</span>}
              </div>

              <CardContent className="card-body">
                <Typography variant="h5" className="project-title">
                  {project.title}
                </Typography>

                <Typography variant="body2" className="project-desc">
                  {project.description}
                </Typography>

                <div className="tech-stack">
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} className="tech-chip" />
                  ))}
                </div>

                <div className="card-footer">
                  <a
                    href={(project.github && project.github) || project.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    {project.github && <>GITHUB </>}
                    {project.kaggle && <>KAGGLE </>}
                    {project.colab && <>GOOGLE COLAB </>}
                    <ArrowForwardIcon
                      style={{ fontSize: "1rem", marginLeft: "4px" }}
                    />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link"
                    >
                      VISIT SITE{" "}
                      <OpenInNewIcon
                        style={{ fontSize: "1rem", marginLeft: "4px" }}
                      />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
