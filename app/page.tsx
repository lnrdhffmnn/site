import Image from "next/image";

export const metadata = {
  title: "Página inicial",
};

export default function Home() {
  return (
    <>
      <Image
        src="https://github.com/lnrdhffmnn.png"
        alt="GitHub"
        width={175}
        height={175}
        priority
        draggable={false}
        className="rounded-full shadow-sm"
      />
      <a
        href="https://github.com/lnrdhffmnn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 font-bold hover:underline mt-2"
      >
        @lnrdhffmnn
      </a>
    </>
  );
}
