import { Project } from "../models/project";
import Card from "../components/card";

export const metadata = {
  title: "Projetos",
};

async function getData() {
  const res = await fetch("https://api.github.com/users/lnrdhffmnn/repos");
  const json = await res.json();

  const projects = Project.array().parse(json);

  const blacklist = ["lnrdhffmnn", "site"];
  const filteredProjects = projects.filter(
    project => !blacklist.includes(project.name)
  );

  return filteredProjects;
}

export default async function Projects() {
  const projects = await getData();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map(project => (
        <Card key={project.name} project={project} />
      ))}
    </div>
  );
}
