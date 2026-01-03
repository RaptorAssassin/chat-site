import HomeButton from "./HomeButton";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-20 bg-gray-700 p-4 text-white">
      <div className="h-screen">
        <nav className="flex flex-col items-center justify-center gap-4">
          <HomeButton />
          <SidebarButton text="Server 1"></SidebarButton>
          <SidebarButton text="Server 2"></SidebarButton>
        </nav>
      </div>
    </aside>
  );
}
