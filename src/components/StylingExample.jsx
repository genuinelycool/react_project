import "./AppleComponent.css";
import styles from "./AmazonComponent.module.css";

const AmazonComponent = () => (
  <div>
    <h1>Amazon</h1>
    <p className={styles.paragraph}>Work hard. Have fun. Make history.</p>
  </div>
);

const AppleComponent = () => (
  <div>
    <h1>Apple</h1>
    <p className="apple-paragraph">Think different.</p>
  </div>
);

const GoogleComponent = () => {
  const paragraphStyle = { color: "#34A853", fontSize: "1.2rem" };
  
  return (
    <div>
      <h1>Google</h1>
      <p style={paragraphStyle}>Organizing the world$apos:s information.</p>
    </div>
  );
};

const StylingExample = () => {
  return (
    <>
      <hr />
      <h2>Styling Example</h2>
      <AmazonComponent />
      <AppleComponent />
      <GoogleComponent />
    </>
  );
};

export default StylingExample;