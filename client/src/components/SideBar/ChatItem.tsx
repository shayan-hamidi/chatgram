import { userProps } from "@/types";
import Image from "next/image";

export default function ChatItem({ user }: { user: userProps }) {
  return (
    <>
      <li className="flex gap-3 cursor-pointer hover:bg-slate-300 p-5 rounded-lg">
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src={user?.imageId ?? ""}
              width={256}
              height={256}
              alt="avatar"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold text-black text-lg">{user?.name}</h3>
          <p className="text-[#707991]">user has joined</p>
        </div>
      </li>
      <div className="divider my-0"></div>
    </>
  );
}
