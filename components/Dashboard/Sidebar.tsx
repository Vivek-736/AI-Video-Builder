"use client";
import { useUser } from "@clerk/nextjs";
import { LayoutDashboard, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sidebarElements = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Create New",
    href: "/dashboard/create",
    icon: PlusCircle,
  },
];

const Sidebar = () => {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <aside className="h-screen sticky left-0 w-64 border-r border-gray-400 dark:border-gray-800 shadow-lg p-5 flex flex-col">
      <div className="flex flex-col items-center pb-6 border-b border-muted/40">
        <Avatar className="w-16 h-16 mb-3">
          <AvatarImage src={user?.imageUrl} alt={user?.fullName || "Guest"} />
          <AvatarFallback>{user?.fullName?.charAt(0) || "G"}</AvatarFallback>
        </Avatar>
        
        <h2 className="text-xl font-semibold tracking-tight uppercase text-primary">Welcome</h2>
        <span className="text-indigo-600 dark:text-indigo-400 text-2xl uppercase font-extrabold">{user?.fullName || "Guest"}</span>
      </div>

      <nav className="flex flex-col gap-3 mt-6">
        {sidebarElements.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3 rounded-lg transition-all duration-200 shadow-md
                ${isActive 
                  ? "bg-primary text-primary-foreground scale-105 shadow-lg" 
                  : "hover:bg-muted/80 text-muted-foreground hover:text-primary hover:scale-102 hover:shadow-md"
                }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "animate-pulse text-white dark:text-black" : "text-primary dark:text-white"}`} />
              <span className="font-medium text-lg">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
