import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Phone, Video, EllipsisVertical } from 'lucide-react'

interface ChatHeaderProps {
  name: string;
  imgUrl: string;
}

export const ChatHeader = ({ name, imgUrl }: ChatHeaderProps) => {
  return (
    <div className="fixed top-0 w-[calc(100%-20rem)] p-4 z-[100]">
      <div className="flex items-center justify-between py-4 px-6 bg-slate-100 rounded-md shadow-sm">
        <div className="flex items-center justify-start gap-2">
          <div>
            <Avatar className="text-right">
              <AvatarImage src={imgUrl} />
              <AvatarFallback className="border">{name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-xs text-muted-foreground">Click here for contact info</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-blue-500">
            <Video />
            <Phone />
            <EllipsisVertical />
        </div>
      </div>
    </div>
  );
};
