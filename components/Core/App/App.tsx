"use client";

import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";

import styles from "./app.module.css";

const CoreApp = ({ children }: any) => {
  return (
    <main className={styles.appContainer}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default CoreApp;
