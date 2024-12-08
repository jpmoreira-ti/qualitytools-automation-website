"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

const templates = [
  {
    name: ".NET",
    link: "https://github.com/jpmoreira-ti/template-dotnet-api-tests",
    imgSrc: "/img/dotnet-logo.png",
    alt: ".NET Repository",
  },
  {
    name: "JavaScript",
    link: "https://github.com/jpmoreira-ti/template-javascript-api-tests",
    imgSrc: "/img/javascript-logo.png",
    alt: "JavaScript Repository",
  },
  {
    name: "Java",
    link: "https://github.com/jpmoreira-ti/template-java-api-tests",
    imgSrc: "/img/java-logo.png",
    alt: "Java Repository",
  },
  {
    name: "Python",
    link: "https://github.com/jpmoreira-ti/template-python-api-tests",
    imgSrc: "/img/python-logo.png",
    alt: "Python Repository",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-8">
      <main className="flex flex-col gap-8 items-center w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mt-4">Quality Tools Automation</h1>
        <p className="text-center text-lg">
          Welcome to our template repository! This page is dedicated to providing templates for API test automation, mobile test automation, and performance testing. Browse through the templates below and click on the links to access the corresponding GitHub repositories.
        </p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-2xl font-bold text-center mt-4">Templates API</h1>
        <hr className="w-full border-t border-gray-300 my-4" />
        <div className="grid grid-cols-2 gap-8 mt-4 w-full">
          {filteredTemplates.map((template) => (
            <div key={template.name} className="flex flex-col items-center text-center">
              <h2 className="text-xl font-bold mb-2">{template.name}</h2>
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
      </main>
    </div>
  );
}