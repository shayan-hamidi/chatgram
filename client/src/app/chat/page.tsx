import Messages from "@/components/ChatThreads/Messages";
import SideBar from "@/components/SideBar/SideBar";

export default function ChatPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex">
        <SideBar />
        <Messages />
      </div>
    </div>
  );
}
