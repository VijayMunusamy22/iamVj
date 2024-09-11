import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";
import CoreApp from "@/components/Core/App/App";

export const metadata: Metadata = {
  title: "Vijay Munusamy",
  description:
    "This is the portfolio web page for the person named as Vijay Munusamy. Who works as a Software Engineer and for more information please do visit the web page.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <CoreApp>{children}</CoreApp>
        </AntdRegistry>
      </body>
    </html>
  );
}
