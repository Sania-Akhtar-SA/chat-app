import { Chat, Message, UserData } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ActionMenu } from "./action-menu";

interface UserContactProps {
  user: UserData;
}

export const UserContact = ({ user }: UserContactProps) => {
  console.log({ user });

  const getLastMessage = (chat: Chat[]): Message | undefined => {
    if (chat.length > 0) {
      const lastChat = chat[chat.length - 1];
      return lastChat.you || lastChat.user1 || lastChat.user2;
    }
  };

  const lastMessage = getLastMessage(user.chat);

  return (
    <div className="w-full h-16 flex items-center  justify-between hover:bg-slate-100 rounded-md">
      <Button className="flex items-center justify-start gap-4 bg-transparent shadow-none text-black hover:bg-transparent">
        <div>
          <Avatar>
            <AvatarImage src={user.profilePictureURL} />
            <AvatarFallback className="border">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        {/* name and last chat */}
        <div className="flex flex-col items-start">
          <h2>{user.name}</h2>
          <div className="flex flex-row justify-between gap-4">
            <p className="text-xs text-muted-foreground truncate w-40 text-start">
              {lastMessage ? lastMessage.message : ""}
            </p>
            {user.unreadCount > 0 ? (
              <span className="bg-green-500 rounded-full w-3 h-3 text-[8px] text-center flex justify-center items-center text-white">
                {user.unreadCount}
              </span>
            ): null}
          </div>
        </div>
      </Button>
      <ActionMenu />
    </div>
  );
};
