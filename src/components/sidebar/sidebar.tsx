import { Wrapper } from "./wrapper";
import { ContactList } from "./contact-list";
import { UserData } from "@/types/type";

interface SidebarProps {
  chat: UserData[];
  setActiveChatId: (id: string) => void;
}

export const Sidebar = ({ chat, setActiveChatId }: SidebarProps) => {
  return (
    <Wrapper>
      <ContactList data={chat} setActiveChatId={setActiveChatId} />
    </Wrapper>
  );
};
