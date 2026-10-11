import "./About.scss";

export default function About({ refe }) {
  const traits = [
    "End-to-end ML",
    "Python & XGBoost",
    "Deployed Projects",
    "Leakage-aware",
    "MERN stack",
    "Full stack Web Development",
  ];
  const stats = [
    { title: "2+ Years", subtitle: "Coding Experience" },
    { title: "7+", subtitle: "Projects Completed" },
    { title: "4", subtitle: "Deployed ML Projects" },
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
              Machine Learning, Python, and Full Stack Development. I build
              complete software solutions, from raw data collection and feature
              engineering to model training, evaluation, and deployment as
              interactive web applications that people can actually use.
            </p>

            <p className="about-text">
              I'm <span className="highlight">Sulav Dhami</span>, a Computer
              Application student at Tribhuvan University with a passion for
              Machine Learning, Python, and Full Stack Development. I enjoy
              building complete products that solve real-world problems, from
              data-driven intelligent systems to scalable web applications. My
              projects include an{" "}
              <span className="highlight">FPL Player Recommender</span>, where I
              engineered a robust machine learning pipeline and optimized
              XGBoost using time-series validation techniques,{" "}
              <span className="highlight">FutHub</span>, a full-stack futsal
              booking and management platform built with the MERN stack, and{" "}
              <span className="highlight">Aakarshan</span>, a platform designed
              to blend creativity and technology through personalized digital
              experiences. Whether it's training models, designing APIs, or
              building responsive user interfaces, I focus on creating reliable,
              scalable, and user-centered solutions from concept to deployment.
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
