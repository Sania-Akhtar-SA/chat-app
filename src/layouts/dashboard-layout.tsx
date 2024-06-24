import { Container } from "@/components/container";
import { Sidebar } from "@/components/sidebar/sidebar";
import { UserData } from "@/types/type";



interface DashboardLayoutProps {
  children: React.ReactNode;
  chat: UserData[];
  setActiveChatId: (id: string) => void;
}

export const DashboardLayout = ({ children, chat, setActiveChatId }: DashboardLayoutProps) => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar chat={chat} setActiveChatId={setActiveChatId} />
        <Container>{children}</Container>
      </div>
    </>
  );
};
