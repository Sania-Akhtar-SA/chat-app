import { Mic, Plus, SendHorizonal } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface ChatInputProps {
  name: string;
}

export const ChatInput = ({ name }: ChatInputProps) => {
  return (
    <div className="fixed bg-white bottom-0 w-[calc(100%-20rem)] flex items-center justify-between h-14 p-2 gap-2 z-[9999]">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center border rounded-full p-2">
          <Plus className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center justify-center border rounded-full p-2">
          <Mic className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="border p-1 rounded-3xl flex flex-1 items-center justify-center w-full">
        <Input
          type="text"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0 border-none"
          placeholder={`Message to ${name}`}
        />
        <Button variant="ghost" className="rounded-full">
          <SendHorizonal className="text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
};
