"use client";

import { fetchMessage } from "@/app/lib/fetchers";
import { useMessages, useSelectedUser, useUser } from "@/store/userStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";

export default function MessageList() {
  const sender = useUser((state: any) => state.myUser);
  const reciever = useSelectedUser((state) => state.selectedUser);
  const { messages, setMessages } = useMessages((state: any) => ({
    messages: state.messages,
    setMessages: state.setMessages,
  }));
  const [parent] = useAutoAnimate();
  useEffect(() => {
    fetchMessage(sender, reciever, setMessages);
  }, [reciever]);
  return (
    <div
      ref={parent}
      className="w-full mb-10 flex flex-col max-h-[75vh] overflow-auto no-scrollbar"
    >
      {messages
        ? (messages as any[]).map((item: any, i: number) => <div key={i}></div>)
        : ""}
    </div>
  );
}
