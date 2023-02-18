"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MenuItem {
  icon: string;
  label: string;
  href: string;
}

export default function Header() {
  const menuItems: MenuItem[] = [
    {
      icon: "🏠",
      label: "Página inicial",
      href: "/",
    },
    {
      icon: "🔍",
      label: "Sobre",
      href: "/about",
    },
    {
      icon: "💼",
      label: "Projetos",
      href: "/projects",
    },
  ];

  const currentPath = usePathname();

  const [currentHover, setCurrentHover] = useState(currentPath);

  useEffect(() => {
    setCurrentHover(currentPath);
  }, [currentPath]);

  return (
    <header
      className="w-full flex items-center justify-center gap-4 p-8 z-50"
      onMouseLeave={() => setCurrentHover(currentPath)}
    >
      {menuItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center justify-center gap-2 relative p-2 w-full max-w-[250px]"
          onMouseEnter={() => setCurrentHover(item.href)}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
          {currentPath === item.href && (
            <motion.div
              layoutId="path"
              transition={{
                type: "spring",
                duration: 0.3,
              }}
              className="absolute bottom-0 w-full h-[2px] bg-white rounded"
            />
          )}
          {currentHover === item.href && (
            <motion.div
              layoutId="hover"
              transition={{
                ease: "easeInOut",
                duration: 0.2,
              }}
              className="absolute bottom-0 w-full h-full bg-zinc-800 rounded-md shadow-sm -z-10"
            />
          )}
        </Link>
      ))}
    </header>
  );
}
