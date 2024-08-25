import Image from 'next/image';
import { type Message as TMessage } from "ai/react";
import { Message } from "./Message";

interface MessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message key={i} content={message.content} isUserMessage={message.role === "user"} />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <Image 
            src="/assets/webbot_header.svg" 
            alt="Webbot Logo" 
            width={1000}  // Adjust the width accordingly
            height={2000} // Adjust the height accordingly
            className="w-1000 h-2000"
          />
          <h3 className="font-semibold text-xl text-white">Welcome to Webbot!</h3>
          <p className="text-zinc-500 text-sm">You&apos;re all set!</p>
        </div>
      )}
    </div>
  );
};
