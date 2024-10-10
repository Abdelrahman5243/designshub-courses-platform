import styles from "./styles.module.css";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div
      className={`${styles.card} text-center bg-secBg p-6 space-y-4 rounded-xl 
    flex flex-col justify-center items-center relative transition-transform duration-200Pricing`}
    >
      <span className={styles.overlay}></span>
      <span className={styles.icon}>{icon}</span>
      <h2 className="sec-heading">{title}</h2>
      <p className="paragraph">{description}</p>
    </div>
  );
}
