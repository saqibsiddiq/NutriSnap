import { DM_Sans } from "next/font/google";
import "./globals.css";
import Bot from "./components/Bot/Bot.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const inter = DM_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Nutrisnap",
  description: "Think of Fitness Think of Us Creation By Prathik Shetty, Rahul Singh , Rishabh Pandey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}

        <Bot />
       
        <Footer />
      </body>
    </html>
  );
}
