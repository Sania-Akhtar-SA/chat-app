import { UserData } from "@/constants/data";
import { UserContact } from "./user-contact";

interface ContactListProps {
  data: UserData[];
  setActiveChatId: (id: string) => void;
}

export const ContactList = ({ data, setActiveChatId }: ContactListProps) => {
  return (
    <div className="w-full h-12">
      <h6 className="text-lg px-4 font-bold">Chats</h6>
      {data.map((user, index) => (
        <div className="flex flex-col gap-4" onClick={() => setActiveChatId(user.userId)}>
          <UserContact key={index} user={user} />
        </div>
      ))}
    </div>
  );
};
