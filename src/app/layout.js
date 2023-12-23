import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laptop Rent",
  description: "Welcome to Ali Computer, your go-to destination for hassle-free laptop rentals! Whether you're a student gearing up for finals, a business professional attending a conference, or a traveler in need of a temporary workstation, we've got you covered. Discover the convenience of renting high-quality laptops for your short-term needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
