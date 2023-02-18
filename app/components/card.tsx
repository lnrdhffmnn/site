import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function Card({ project }: Props) {
  return (
    <div className="bg-zinc-800 p-4 rounded-md shadow-sm border border-zinc-700">
      <h1 className="capitalize font-bold">
        <a
          href={project.homepage ?? project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {project.name}
        </a>
      </h1>
      <div className="text-sm font-light mt-1">
        <p>{project.language}</p>
        <p>
          <span>⭐ </span>
          <span>{project.stargazers_count}</span>
        </p>
      </div>
    </div>
  );
}
