import { Image } from "antd";
import localFont from "next/font/local";

import styles from "./about.module.css";

//👇 Configure our local font object
const kanitSemiBold = localFont({
  src: "../../../fonts/Kanit/Kanit-SemiBold.ttf",
});
const poppinsMedium = localFont({
  src: "../../../fonts/Poppins/Poppins-Medium.ttf",
});
const poppinsRegular = localFont({
  src: "../../../fonts/Poppins/Poppins-Regular.ttf",
});

const About = () => {
  return (
    <div className={styles.aboutOuterContainer}>
      <div className={styles.contentContainer}>
        <h2 className={`${kanitSemiBold.className} ${styles.welcomeMessage}`}>
          Welcome to My Digital Playground!
        </h2>
        <p
          className={`${poppinsRegular.className} ${styles.descriptionContent}`}
        >
          Hey there! I'm{" "}
          <span className={`${poppinsMedium.className} ${styles.highlighter}`}>
            Vijay Munusamy
          </span>
          , a seasoned software engineer with over{" "}
          <span className={`${poppinsMedium.className} ${styles.highlighter}`}>
            6 years of experience
          </span>{" "}
          in crafting sleek, cutting-edge web experiences. When it comes to
          front-end magic, I’m your go-to wizard, conjuring up intuitive
          interfaces with the latest technologies. On the flip side, I dive into
          the cloud with AWS expertise to build robust, scalable back-end
          solutions. Whether it's making pixels dance or wrangling cloud
          infrastructure, I turn complex problems into seamless, elegant
          solutions. Let’s build something awesome together!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`/about_me.png`}
          alt="About Me"
          className={styles.imageIllustrate}
        />
      </div>
    </div>
  );
};

export default About;
