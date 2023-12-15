import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1.',
    codeLink: 'Enlace al código del Proyecto 1',
    deployLink: 'Enlace al deploy del Proyecto 1',
  },
  // Agregar más proyectos según sea necesario
];

const Portfolio = () => {
  return (
    <div>
      <h1>Mi Portfolio</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Código:</strong> <a href={project.codeLink}>{project.codeLink}</a>
          </p>
          <p>
            <strong>Deploy:</strong> <a href={project.deployLink}>{project.deployLink}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
