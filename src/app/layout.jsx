import { Libre_Franklin } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata = {
  title: "Truelegs",
  description: "Truelegs shoe and sneaker website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={libreFranklin.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
