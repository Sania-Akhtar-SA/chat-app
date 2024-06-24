import { ChatConversations } from "@/components/chatwindow/chat-conversations";
import { ChatHeader } from "@/components/chatwindow/chat-header";
import { ChatInput } from "@/components/chatwindow/chat-input";
import { Chat } from "@/types/type";

interface ConversationProps {
  chat:
    | {
        userId: string;
        name: string;
        profilePictureURL: string;
        chat: Chat[];
      }
    | undefined;
}

const Conversation = ({ chat }: ConversationProps) => {
  if (!chat) {
    return (
      <div className="p-6 flex flex-col items-center justify-center h-[90vh]">
        <div className="flex items-center justify-center w-[30vw]">
          <img src="./nomsg.svg" alt="nomsg" />
        </div>
        <h1 className="text-2xl font-bold">Select User to open conversation</h1>
      </div>
    );
  }
  return (
    <div className="p-6 overflow-hidden">
      <ChatHeader name={chat.name} imgUrl={chat.profilePictureURL} />
      <ChatConversations chats={chat.chat} />
      <ChatInput name={chat.name} />
    </div>
  );
};

export default Conversation;
