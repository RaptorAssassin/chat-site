import Image from "next/image";
import ServerSidebar from "../components/ServerSidebar";
import ChannelSidebar from "..//components/ChannelSidebar";

export default function Home() {
  return (
    <div>
      <ServerSidebar />
      <ChannelSidebar />
    </div>
  );
}
