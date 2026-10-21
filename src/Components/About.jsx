import "./About.scss";

export default function About({ refe }) {
const traits = [
  "Deep Learning & CNNs",
  "End-to-End ML",
  "Python & TensorFlow",
  "Deployed AI Apps",
  "MERN Stack",
  "Full-Stack Development",
];
  const stats = [
    { title: "2+ Years", subtitle: "Coding Experience" },
    { title: "9+", subtitle: "Projects Completed" },
    { title: "4", subtitle: "Deployed ML/DL Projects" },
    { title: "5", subtitle: "Live Web Apps" },
  ];
  return (
    <>
      <div className="aboutt" ref={refe}>
        <div className="about-heading">
          <span>About Me</span>
        </div>
        <div className="about-info">
          <div className="about-left">
            <p className="about-text">
              I'm <span className="highlight">Sulav Dhami</span>, a Computer
              Application student at Tribhuvan University passionate about
              Machine Learning, Deep Learning, and Full-Stack Development. I
              build complete software solutions, from raw data collection and
              feature engineering to training neural networks and deploying
              interactive web applications that people can actually use.
            </p>

            <p className="about-text">
              I enjoy building end-to-end products that solve real-world
              problems. My work includes an{" "}
              <span className="highlight">FPL Player Recommender</span> where I
              engineered a leakage-free XGBoost pipeline using time-series
              validation, and a{" "}
              <span className="highlight">Multi-Task CNN</span> built from
              scratch that simultaneously predicts age (regression) and gender
              (classification) from facial images. Beyond AI, I've built{" "}
              <span className="highlight">FutHub</span>, a full-stack MERN
              futsal booking platform, and{" "}
              <span className="highlight">Aakarshan</span>, a digital canvas
              store. Whether it's debugging data pipelines, designing APIs, or
              building responsive UIs, I focus on creating reliable, scalable,
              and user-centered solutions from concept to deployment.
            </p>
            <div className="traits-container">
              {traits.map((trait, index) => {
                return (
                  <button key={index} className={`trait-btn`}>
                    {trait}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="about-right">
            <div className="about-skills">
              <div className="stats-container">
                {stats.map((stat, index) => {
                  return (
                    <div key={index} className="stat-card">
                      <h3 className="stat-title">{stat.title}</h3>
                      <p className="stat-subtitle">{stat.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="funfact">
            <h3>✨ Fun Fact</h3>
            <p>
              My workflow project{" "}
              <em style={{ fontWeight: "bold", color: "#ff7f50" }}>
                Discord Invoice Replier
              </em>{" "}
              built with <span className="highlight-n8n">n8n</span> was
              recognized on LinkedIn by{" "}
              <span className="highlight-founder">
                Jan Oberhauser, founder & CEO of n8n
              </span>
              , who <span className="highlight-like">liked </span> my post.{" "}
              <br />
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7483701409515982849/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "5px",
                  display: "inline-block",
                }}
              >
                Click to view the LinkedIn post
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
