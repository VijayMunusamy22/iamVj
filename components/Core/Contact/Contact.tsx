"use client";

import { useState } from "react";
import localFont from "next/font/local";

import styles from "./contact.module.css";
import { Image } from "antd";

const kanitLight = localFont({
  src: "../../../fonts/Kanit/Kanit-Light.ttf",
});
const poppinsMedium = localFont({
  src: "../../../fonts/Poppins/Poppins-Medium.ttf",
});
const poppinsBold = localFont({
  src: "../../../fonts/Poppins/Poppins-Bold.ttf",
});

const Contact = () => {
  const [emailId, setEmailId] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactFormHandler = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        emailId,
        subject,
        message,
      }),
    });
  };

  return (
    <div className={styles.contactOuterContainer}>
      <div className={styles.imageWrapper}>
        <Image src="/contact_thumbnail.png" height={400} width={400} />
      </div>
      <div className={styles.contentFormWrapper}>
        <h3
          className={`${poppinsBold.className} ${styles.contactHeaderMessage}`}
        >
          Its time to get in touch. Happy to hear from you!
        </h3>
        <form onSubmit={contactFormHandler} className={styles.formContainer}>
          <div className={styles.eachInputComp}>
            <label
              className={`${kanitLight.className} ${styles.eachInputLabel}`}
            >
              EmailId
            </label>
            <input
              type="text"
              autoCorrect="off"
              autoCapitalize="off"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className={`${poppinsMedium.className} ${styles.eachInputElement}`}
            />
          </div>
          <div className={styles.eachInputComp}>
            <label
              className={`${kanitLight.className} ${styles.eachInputLabel}`}
            >
              Subject
            </label>
            <input
              type="text"
              autoCorrect="on"
              autoCapitalize="on"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`${poppinsMedium.className} ${styles.eachInputElement}`}
            />
          </div>
          <div className={styles.eachInputComp}>
            <label
              className={`${kanitLight.className} ${styles.eachInputLabel}`}
            >
              Message
            </label>
            <textarea
              autoCorrect="on"
              autoCapitalize="on"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${poppinsMedium.className} ${styles.eachInputElement} ${styles.eachInputArea}`}
              rows={3}
            />
          </div>
          <div>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
