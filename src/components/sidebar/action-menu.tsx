import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export const ActionMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical className="h-4 w-4 text-blue-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <DropdownMenuItem>Mark as unread</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
        <DropdownMenuItem>Cancel</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
