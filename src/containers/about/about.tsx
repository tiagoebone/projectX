const About = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 78px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#21222c",
      }}
    >
      <div>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "18px", color: "#fff" }}>
            This is an idea that I have.
          </span>
        </div>
        <div>
          <img
            alt=""
            src={
              "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fSPSoxc7HWlJ6GlxopbOpPQJy7P_JYzpHoozhwNWKwqOga77UkD8JvMYpi7-S99mj0FLh80U4Zm77cYXEclc8aQ3Oug_pGXJ5enA/330x192"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
