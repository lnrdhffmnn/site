import { Project } from "@/app/types";
import { z } from "zod";

interface Props {
  project: z.infer<typeof Project>;
}

export default function Card({ project }: Props) {
  return (
    <div className="bg-zinc-800 p-4 rounded-md shadow-sm border border-zinc-700 flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="capitalize font-bold">
          <a
            href={project.homepage ?? project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {project.name.replaceAll("-", " ")}
          </a>
        </h1>
        <div className="flex gap-1">
          <span>⭐</span>
          <span>{project.stargazers_count}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.topics.map(topic => (
          <span
            key={topic}
            className="px-2 py-1 bg-sky-600 bg-opacity-30 rounded-full text-xs text-sky-300 font-bold"
          >
            {topic}
          </span>
        ))}
      </div>
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-light text-zinc-300 hover:underline break-words"
      >
        {project.html_url}
      </a>
    </div>
  );
}
