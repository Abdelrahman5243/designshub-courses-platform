import styles from "./styles.module.css"
const Cta = () => {
    return (
      <section className="container mx-auto px-4 py-12 my-8 mx-auto text-center">
        <div
          className={`flex flex-col items-center justify-center p-12 ${styles.ctaSection} h-96 rounded-3xl overflow-hidden`}
        >
          <h1 className="main-heading">
            Stay Connected, Anywhere Anytime
          </h1>
          <p className="paragraph py-5">
            Find answers to commonly asked questionsData about our services and
            solutions.
          </p>
          <button type="button" className="btn px-8">
            Get started now
          </button>
        </div>
      </section>
    );
}

export default Cta