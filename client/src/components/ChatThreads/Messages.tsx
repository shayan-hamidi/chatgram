"use client";

import { useSelectedUser } from "@/store/userStore";
import Topbar from "./Topbar";
import MessageList from "./MessageList";

export default function Messages() {
  const selectedUser = useSelectedUser((state) => state.selectedUser);
  return (
    <div className="bg-image messages w-full min-h-screen z-0 hidden md:w-1/2 lg:w-2/3 md:flex md:flex-col flex-col">
      <Topbar selectedUser={selectedUser} />
      <div
        className={`max-w-sm md:max-w-3xl w-full mx-auto mb-10 ${
          selectedUser ? "" : "hidden"
        }`}
      >
        <MessageList />
      </div>
    </div>
  );
}
