"use client";

import { Anchor, ConfigProvider, Image } from "antd";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image height={80} width={80} src="/app_logo.svg" />
      </div>
      <div className={styles.navLinksOuterContainer}>
        <ConfigProvider
        theme={{
          components: {
            Anchor: {
              linkPaddingInlineStart: 48,
              colorPrimary: '#8E43ED',
              fontSize: 18,
            }
          }
        }}
        >
        <Anchor
          className={styles.navLinksContainer}
          direction="horizontal"
          items={[
            {
              key: "about",
              href: "#about",
              title: "About",
            },
            {
              key: "projects",
              href: "#projects",
              title: "Projects",
            },
            {
              key: "resume",
              href: "#resume",
              title: "Resume",
            },
            {
              key: "contact",
              href: "#contact",
              title: "Contact",
            },
          ]}
        />
        </ConfigProvider>
      </div>
    </header>
  );
};

export default Header;
