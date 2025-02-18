import { Sigmar, Barriecito, Bangers, Atma, Rubik, Jua, Lilita_One, Poppins } from "next/font/google";
import "./globals.css";

const sigmar = Sigmar({
  subsets: ["latin"],
  weight: ["400"],
});

const barriecito = Barriecito({
  subsets: ["latin"],
  weight: ["400"],
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
});


const lilita_One = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700"],
});

const atma = Atma({
  subsets: ["latin"],
  weight: ["400"],
});

const jua = Jua({
  subsets: ["latin"],
  weight: ["400"],
});



export const metadata = {
  title: "Create Next App",
  description: "To-Do App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
