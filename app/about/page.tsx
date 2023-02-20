import ReactMarkdown from "react-markdown";

export const metadata = {
  title: "Sobre",
};

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/lnrdhffmnn/lnrdhffmnn/main/README.md"
  );
  const text = await res.text();

  return { md: text };
}

export default async function About() {
  const { md } = await getData();

  return <ReactMarkdown>{md}</ReactMarkdown>;
}
