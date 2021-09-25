import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import EmailSignupForm from "../components/EmailSignUpForm";

const features = [
  {
    title: "Activities, Blog, FAQ and more",
    imageUrl: "../../img/svg/undraw_online_organizer.svg",
    description: 
      <>
        We keep track and organize our past Bootcamp, events, Frequently Asked Questions, and more exciting things on the go.
      </>,
  },
  {
    title: "Cultivate Ideas and Positivity",
    imageUrl: "../../img/svg/undraw_positive_attitude.svg",
    description: (
      <>
        Have something in mind and would like to share with us? email us and we&apos;ll be in contact with you soon.
      </>
    ),
  },
  {
    title: "Online Learning",
    imageUrl: "../../img/svg/undraw_online_learning.svg",
    description: 
      <>
        Equip yourself with essential Microsoft Office 365 knowledge to be more efficient and productive on tasks.
      </>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="We provide technical and educational solutions not limited to employees, employers, educators, and students from Malaysia, but also people across the globe.">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          <h1 className="hero__title">Educators of{" "}
            <span className="hero__title__1p">Mic</span >
            <span className="hero__title__2p">ro</span>
            <span className="hero__title__3p">so</span>
            <span className="hero__title__4p">ft</span> 
            {" "}Office 365
          </h1>
          <h4 className="hero__subtitle">{siteConfig.tagline}</h4>
          <div className={styles.buttons}>
            <Link className={clsx("button button--outline button--secondary button--lg", styles.getStarted)} to={useBaseUrl("docs/intro")}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
			<EmailSignupForm placeholder="Enter your email to receive updates" />
    </Layout>
  );
}

export default Home;
