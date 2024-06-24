import { Chat } from "@/types/type";

interface ChatConversationsProps {
  chats: Chat[];
}

export const ChatConversations = ({ chats }: ChatConversationsProps) => {
  return (
    <div className="absolute top-20 bottom-10 w-[calc(100%-20rem)] p-6 flex flex-col gap-4 overflow-scroll z-10">
      {chats.map((msg, index) => (
        <div key={index}>
          {msg.user1 && (
            <div className="flex items-start justify-start w-full">
              <div className="bg-slate-200 flex flex-col items-end px-6 py-2 rounded-full">
                <p>{msg.user1.message}</p>
                <p>{msg.user1.timeStamp}</p>
              </div>
            </div>
          )}
          {msg.user2 && (
            <div className="flex items-start justify-start w-full">
              <div className="bg-slate-200 flex flex-col items-end px-6 py-2 rounded-full">
                <p>{msg.user2.message}</p>
                <p>{msg.user2.timeStamp}</p>
              </div>
            </div>
          )}
          {msg.you && (
            <div className="flex items-end justify-end w-full">
              <div className="bg-green-500 flex flex-col items-start px-6 py-2 rounded-full">
                <p>{msg.you.message}</p>
                <p>{msg.you.timeStamp}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
