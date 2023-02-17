import Link from "next/link";

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
  ];

  return (
    <header className="w-full flex items-center justify-center gap-8 p-8">
      {menuItems.map(item => (
        <Link key={item.href} href={item.href} className="flex gap-2">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </header>
  );
}
