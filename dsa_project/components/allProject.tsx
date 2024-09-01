import React from 'react';
//@ts-ignore
function Tag({ text }) {
  return (
    <div className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2 transition-all duration-200 hover:bg-blue-600">
      {text}
    </div>
  );
}
//@ts-ignore
export default function AllProjectCard({project}) {
  

  const tags = project.Tags.split(' ');

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102  max-w-2xl mx-auto">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-white mb-2">{project.Title}</h2>
        <p className="text-gray-400 mb-4">
          <span className="font-semibold">Developer:</span> {project.Email}
        </p>
        <p className="text-gray-300 mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
          {project.Description}
        </p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag:any, index:any) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={project.Github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gray-700 text-blue-300 px-6 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200 text-center"
          >
            GitHub
          </a>
          <a
            href={project.Project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}