import styles from "./About.module.css";
import photo1 from "./img1.jpg";
import photo2 from "./img2.jpg";
import photo3 from "./img3.jpg";
import photo4 from "./img4.jpg";

function About() {
  return (
    <div className={styles.container}>
      <h1>About me...</h1>
      <p>
        Hello! I'm Carlos Canabal, and I come from the beautiful town of Turbaco
        in Colombia, which is close to the historic city of Cartagena. I became
        a civil engineer in 2016, and I've been involved in various construction
        and infrastructure projects since then, like building tall structures
        and roads. My family means the world to me, including my loving parents,
        my brother, and my late sister. My nephew is like a son to me, and I'm
        also excitedly planning my upcoming wedding with my dear girlfriend to
        complete the family.
        <br />
        <br />
        Recently, I discovered a strong interest in programming that has
        overshadowed my passion for civil engineering. I find programming
        fascinating because it allows me to create digital solutions and explore
        endless possibilities. I dream of making a career switch to the tech
        industry and ideally working for an international company that lets me
        work remotely, giving me the freedom to choose where I work, whether
        it's in a bustling city or the peaceful surroundings of my hometown.{" "}
        <br />
        <br />
        The road ahead may be uncertain, but I'm filled with enthusiasm for
        pursuing my true passion. I believe that our careers should be driven by
        what we love, and I'm excited to embark on this journey of
        self-discovery and transformation. With dedication, persistence, and a
        strong commitment to learning, I'm confident that I can excel as a
        programmer and contribute to the ever-evolving tech world. As I look
        ahead, I'm reminded that it's never too late to chase your dreams, and
        with determination and resilience, I'm eager to embrace the endless
        opportunities that await.
      </p>
      <div className={styles.photoContainer}>
        <img src={photo1} alt="photo1" />
        <img src={photo2} alt="photo2" />
        <img src={photo3} alt="photo3" />
        <img src={photo4} alt="photo4" />
      </div>
    </div>
  );
}

export default About;
