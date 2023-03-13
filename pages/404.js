import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function Page404() {
  const [icons, setIcons] = useState([]);

  // define an array of Microsoft icons to display
  const microsoftIcons = [
    "public\favicon\365.png",
    "public\favicon\azure.png",
    "public\favicon\Minecraft.png",
    "public\favicon\Power.png",
    "public\favicon\Windows.png"
  ];

  // generate a random position for each icon
  const randomPosition = () => {
    const position = Math.floor(Math.random() * 90);
    return `${position}%`;
  };

  // generate a random delay for each icon
  const randomDelay = () => {
    const delay = Math.floor(Math.random() * 8);
    return `${delay}s`;
  };

  // generate a random duration for each icon
  const randomDuration = () => {
    const duration = Math.floor(Math.random() * 4) + 4;
    return `${duration}s`;
  };

  // display the icons with random positions, delays, and durations
  useEffect(() => {
    const icons = microsoftIcons.map((icon, index) => {
      return (
        <img
          src={icon}
          key={index}
          alt="Microsoft icon"
          className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
          style={{
            left: randomPosition(),
            animationDelay: randomDelay(),
            animationDuration: randomDuration()
          }}
        />
      );
    });
    setIcons(icons);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Page Not Found - 404 Error</title>     
        </Head>        
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <div className="p-10 bg-white rounded-lg shadow-lg md:p-20 lg:p-24">
            <h1 className="text-5xl font-bold text-gray-800 leading-none mb-10 text-center md:text-6xl lg:text-7xl">Oops!</h1>
            <h2 className="text-2xl font-bold text-gray-800 leading-none mb-10 text-center md:text-3xl lg:text-4xl">Page not found</h2>
            <div className="flex items-center justify-center mb-10">
              <img src="/404-error.svg" alt="404 error illustration" className="w-48 md:w-64 lg:w-80"/>
            </div>
            <p className="text-lg text-gray-800 leading-tight text-center md:text-xl lg:text-2xl">We couldn't find the page you were looking for. Please check the URL or click the button below to go back to the homepage.</p>
            <div className="flex items-center justify-center mt-10">
              <a href="/" className="px-6 py-3 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Go to Homepage</a>
            </div>
          </div>
          {icons}
        </div>
        <Container>
        
        </Container>
      </Layout>
    </>
  );
}