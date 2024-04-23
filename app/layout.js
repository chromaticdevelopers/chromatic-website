import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chromatic Developers ",
  description: "At Chromatic Developers, we're not just building websites; we're crafting digital experiences that propel businesses forward. As a team of freelance software wizards, we specialize in designing and developing bespoke software solutions and websites tailored to your unique needs. With a passion for innovation and a commitment to excellence, we transform your ideas into polished, pixel-perfect realities. Whether you're a startup looking to make your mark or an established business seeking to revitalize your online presence, we're here to bring your vision to life.Our collaborative approach ensures that every project is a true reflection of your brand identity and business objectives. From concept to deployment, we work closely with you every step of the way, delivering solutions that exceed expectations and drive results.Ready to take your online presence to the next level? Let's connect and explore how Chromatic Developers can help you unlock your digital potential. Together, we'll turn your dreams into digital reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
