import { Fragment, MessageRole, MessageType } from "@/generated/prisma";

interface MessageCardProps {
    content: string;
    role: MessageRole;
    fragment: Fragment | null;
    createdAt: Date;
    isActiveFragment: boolean;
    onFragmentClick: (fragment: Fragment) => void;
    type: MessageType;

}

const MessageCard = () => {
  return (
    <div>
      
    </div>
  )
}

export default MessageCard
