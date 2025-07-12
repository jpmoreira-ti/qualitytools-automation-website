"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

const apiTemplates = [
  {
    id: "dotnet-api",
    name: "RestSharp",
    link: "https://github.com/jpmoreira-ti/template-dotnet-api-tests",
    imgSrc: "/img/dotnet-logo.png",
    alt: ".NET API Template Repository",
  },
  {
    id: "javascript-api",
    name: "SuperTest",
    link: "https://github.com/jpmoreira-ti/template-javascript-api-tests",
    imgSrc: "/img/javascript-logo.png",
    alt: "JavaScript API Template Repository",
  },
  {
    id: "java-api",
    name: "RestAssured",
    link: "https://github.com/jpmoreira-ti/template-java-api-tests",
    imgSrc: "/img/java-logo.png",
    alt: "Java API Template Repository",
  },
  {
    id: "python-api",
    name: "Robot F. with Requests",
    link: "https://github.com/jpmoreira-ti/template-python-api-tests",
    imgSrc: "/img/python-logo.png",
    alt: "Python API Template Repository",
  },
];

const webTemplates = [
  {
    id: "cypress-web",
    name: "Cypress",
    link: "https://github.com/jpmoreira-ti/template-web-api-cypress-tests",
    imgSrc: "/img/cypress-logo.png",
    alt: "Cypress Web API Template Repository",
  },
  {
    id: "robot-web",
    name: "Robot F. with Browser",
    link: "https://github.com/jpmoreira-ti/template-web-robot-framework",
    imgSrc: "/img/robotf-logo.png",
    alt: "Robot Framework Web Template Repository",
  },
];

const mobileTemplates = [
  {
    id: "Compose-ui-mobile",
    name: "Instrumented Tests with Espresso",
    link: "https://github.com/jpmoreira-ti/espresso-app-test",
    imgSrc: "/img/espresso.png",
    alt: "Android Espresso Repository",
  },
  {
    id: "robot-mobile",
    name: "Robot F. with Appium",
    link: "https://github.com/jpmoreira-ti/template-mobile-robot-framework",
    imgSrc: "/img/robotf-logo.png",
    alt: "Robot Framework Mobile Template Repository",
  },
  {
    id: "webdriverio-mobile",
    name: "WebdriverIO with Appium",
    link: "https://github.com/jpmoreira-ti/template-mobile-webdriverIO",
    imgSrc: "/img/webdriverio.png",
    alt: "WebDriverIO Mobile Template Repository",
  },
];

const perfomanceTemplates = [
  {
    id: "k6-perfomance",
    name: "Load Tests with K6",
    link: "https://github.com/jpmoreira-ti/template-grafana-k6-load-test",
    imgSrc: "/img/k6-logo.png",
    alt: "Android Compose Repository",
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApiTemplates = apiTemplates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredWebTemplates = webTemplates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMobileTemplates = mobileTemplates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPerfomanceTemplates = perfomanceTemplates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-8">
      <main className="flex flex-col gap-8 items-center w-full max-w-4xl">
        <h1 id="main-title" className="text-4xl font-bold text-center mt-4">Quality Tools Automation</h1>
        <p className="text-center text-lg">
          Welcome to my template repository! I&apos;m João Paulo Moreira and I&apos;ve been working as a SDET for over 6 years. This page is dedicated to providing templates for API, Web and Mobile automation testing and performance/load testing. Browse through the templates below and click on the links to access the corresponding GitHub repositories. I hope it can helping you in your test automation journey! 
        </p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 id="api-template-title" className="text-2xl font-bold text-center mt-4">API testing templates</h1>
        <hr className="w-full border-t border-gray-300 my-4" />
        <div className="grid grid-cols-2 gap-8 mt-4 w-full">
        {filteredApiTemplates.map((template, index) => (
          <div
            key={template.id}
            className={`flex flex-col items-center text-center ${index === 1 ? 'mb-16' : ''}`}
          >
            <h2 id={template.id} className="text-xl font-bold mb-2">{template.name}</h2>
            <a href={template.link} target="_blank" rel="noopener noreferrer">
              <img
                src={template.imgSrc}
                alt={template.alt}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </a>
          </div>
        ))}
      </div>
        <hr className="w-full border-t border-gray-300 my-8" />
        <h1 id="mobile-template-title" className="text-2xl font-bold text-center mt-4">Web testing templates</h1>
        <div className="grid grid-cols-2 gap-8 mt-4 w-full">
          {filteredWebTemplates.map((template, index) => (
            <div
            key={template.id}
            className={`flex flex-col items-center text-center ${index === 1 ? 'mb-16' : ''}`}
          >
              <h2 id={template.id} className="text-xl font-bold mb-2">{template.name}</h2>
              <a href={template.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={template.imgSrc}
                  alt={template.alt}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
        <hr className="w-full border-t border-gray-300 my-8" />
        <h1 className="text-2xl font-bold text-center mt-4">Mobile testing templates</h1>
        <div className="grid grid-cols-2 gap-8 mt-4 w-full">
          {filteredMobileTemplates.map((template, index) => (
            <div
            key={template.id}
            className={`flex flex-col items-center text-center ${index === 1 ? 'mb-16' : ''}`}
          >
              <h2 id={template.id} className="text-xl font-bold mb-2">{template.name}</h2>
              <a href={template.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={template.imgSrc}
                  alt={template.alt}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
        <hr className="w-full border-t border-gray-300 my-8" />
        <h1 id="perfomance-template-title" className="text-2xl font-bold text-center mt-4">Perfomance testing templates</h1>
        <div className="grid grid-cols-2 gap-8 mt-4 w-full">
          {filteredPerfomanceTemplates.map((template, index) => (
            <div
            key={template.id}
            className={`flex flex-col items-center text-center ${index === 1 ? 'mb-16' : ''}`}
          >
              <h2 id={template.id} className="text-xl font-bold mb-2">{template.name}</h2>
              <a href={template.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={template.imgSrc}
                  alt={template.alt}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}