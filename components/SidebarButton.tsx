export default function SidebarButton({ text = "Button", icon = "" }) {
  return (
    <div>
      <button className="rounded-2xl bg-white text-center text-black hover:cursor-pointer">
        {text}
        {icon}
      </button>
    </div>
  );
}
