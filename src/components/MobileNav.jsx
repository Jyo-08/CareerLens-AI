import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  MapIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

function MobileNav() {
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      path: "/dashboard",
      icon: HomeIcon,
    },
    {
      label: "AI",
      path: "/recruiter-ai",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      label: "Roadmap",
      path: "/roadmap",
      icon: MapIcon,
    },
    {
      label: "Progress",
      path: "/history",
      icon: ChartBarIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs transition ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;