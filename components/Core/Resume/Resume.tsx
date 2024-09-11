"use client";

import localFont from "next/font/local";
import { DownloadOutlined } from "@ant-design/icons";

import styles from "./resume.module.css";
import { Image } from "antd";

const kanitBold = localFont({
  src: "../../../fonts/Kanit/Kanit-Bold.ttf",
});
const poppinsThin = localFont({
  src: "../../../fonts/Poppins/Poppins-Thin.ttf",
});
const poppinsMedium = localFont({
  src: "../../../fonts/Poppins/Poppins-Medium.ttf",
});

const Resume = () => {
  return (
    <div className={styles.resumeOuterContainer}>
      <div className={styles.imageWrapper}>
        <Image src="/resume_thumnail.png" height={400} width={400} />
      </div>
      <div className={styles.contentOuterWrapper}>
        <div className={styles.contentWrapper}>
          <p className={`${kanitBold.className} ${styles.contentHeader}`}>
            Intrested with my profile?
          </p>
          <span
            className={`${poppinsThin.className} ${styles.contentDescription}`}
          >
            Please feel free to download my CV and get to know more about my
            experience and past works
          </span>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`${poppinsMedium.className} ${styles.resumeDwnBtn}`}
          >
            Download my CV&nbsp;&nbsp;
            <DownloadOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
