import { DashboardLayout } from "@/layouts/dashboard-layout";
import { data } from "@/constants/data";
import { useState } from "react";
import Conversation from "./conversation";

const ChatApp = () => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const activeChat = data.find(chat => chat.userId === activeChatId);

  return (
    <>
      <DashboardLayout chat={data} setActiveChatId={setActiveChatId}>
        <Conversation chat={activeChat} />
      </DashboardLayout>
    </>
  );
};

export default ChatApp;
