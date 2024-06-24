export type Message = {
    message: string;
    timeStamp: string;
  }
  
export type Chat = {
    user1?: Message;
    user2?: Message;
    you: Message;
  }
  
export type UserData = {
    userId: string;
    name: string;
    unreadCount: number;
    profilePictureURL: string;
    chat: Chat[];
  }