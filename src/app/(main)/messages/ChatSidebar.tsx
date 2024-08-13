import React from "react";
import { useSession } from "../SessionProvider";
import { ChannelList } from "stream-chat-react";

export default function ChatSidebar() {
  const { user } = useSession();
  return (
    <div className="size-full flex flex-col border-e md:w-72">
      <ChannelList />
    </div>
  );
}
