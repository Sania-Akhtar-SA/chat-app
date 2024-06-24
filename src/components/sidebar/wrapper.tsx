import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {

  const { collapsed } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[19.5rem] h-full p-2 bg-neutral-50 dark:bg-[#252731] border-r border-accent z-50",
        collapsed && "w-full"
      )}
    >
      {children}
    </aside>
  );
};
