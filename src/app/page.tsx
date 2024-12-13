"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

const apiTemplates = [
  {
    id: "dotnet",
    name: "RestSharp",
    link: "https://github.com/jpmoreira-ti/template-dotnet-api-tests",
    imgSrc: "/img/dotnet-logo.png",
    alt: ".NET Repository",
  },
  {
    id: "javascript",
    name: "SuperTest",
    link: "https://github.com/jpmoreira-ti/template-javascript-api-tests",
    imgSrc: "/img/javascript-logo.png",
    alt: "JavaScript Repository",
  },
  {
    id: "java",
    name: "RestAssured",
    link: "https://github.com/jpmoreira-ti/template-java-api-tests",
    imgSrc: "/img/java-logo.png",
    alt: "Java Repository",
  },
  {
    id: "python",
    name: "Robot F.",
    link: "https://github.com/jpmoreira-ti/template-python-api-tests",
    imgSrc: "/img/python-logo.png",
    alt: "Python Repository",
  },
];

const webTemplates = [
  {
    id: "cypress",
    name: "Cypress",
    link: "https://github.com/jpmoreira-ti/template-web-cypress-tests",
    imgSrc: "/img/cypress.png",
    alt: "Cypress Repository",
  },
];

const mobileTemplates = [
  {
    id: "Compose-ui",
    name: "Instrumented Tests with Compose UI",
    link: "https://github.com/jpmoreira-ti/template-compose-ui-tests",
    imgSrc: "/img/compose-ui.png",
    alt: "Android Compose Repository",
  },
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-8">
      <main className="flex flex-col gap-8 items-center w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mt-4">Quality Tools Automation</h1>
        <p className="text-center text-lg">
          Welcome to my template repository! I&apos;m João Paulo Moreira and I&apos;ve been working as a SDET over 6 years. This page is dedicated to providing templates for API test automation, mobile test automation, and performance testing. Browse through the templates below and click on the links to access the corresponding GitHub repositories. I hope it can helping you in your test automation journey! 
        </p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-2xl font-bold text-center mt-4">Templates API</h1>
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
        <h1 className="text-2xl font-bold text-center mt-4">Templates WEB</h1>
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
        <h1 className="text-2xl font-bold text-center mt-4">Templates MOBILE</h1>
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
      </main>
    </div>
  );
}