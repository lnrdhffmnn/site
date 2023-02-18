import { Project } from "@/types";
import Card from "../components/card";

async function getData() {
  const res = await fetch("https://api.github.com/users/lnrdhffmnn/repos");
  const json = (await res.json()) as Project[];

  const projects: Project[] = json.map(project => ({
    name: project.name,
    description: project.description,
    language: project.language,
    stargazers_count: project.stargazers_count,
    homepage: project.homepage,
    html_url: project.html_url,
    topics: project.topics,
  }));

  const blacklist = ["lnrdhffmnn", "site"];

  return projects.filter(project => !blacklist.includes(project.name));
}

export default async function Projects() {
  const projects = await getData();

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {projects.map(project => (
        <Card key={project.name} project={project} />
      ))}
    </div>
  );
}
