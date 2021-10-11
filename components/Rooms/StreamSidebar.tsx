import { useState } from "react"
import { ChatIcon, CalculatorIcon } from "@heroicons/react/solid"

import IconButton from "../App/IconButton"
import Button from "../App/Button"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CHAT_MESSAGES } from "../../constants/messages"
import Avatar from "../App/Avatar"

export default function StreamSidebar() {
  const [tab, setTab] = useState<"chat" | "calculator">("chat")

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="w-1/4 flex flex-col divide-y divide-lightGray border border-lightGray bg-white rounded-lg">
      <header className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => setTab("chat")}
            className={
              tab === "chat"
                ? "text-green bg-green bg-opacity-10"
                : "text-gray bg-gray bg-opacity-10"
            }
          >
            <ChatIcon className="w-5 h-5" />
          </IconButton>
          <IconButton
            onClick={() => setTab("calculator")}
            className={
              tab === "calculator"
                ? "text-green bg-green bg-opacity-10"
                : "text-gray bg-gray bg-opacity-10"
            }
          >
            <CalculatorIcon className="w-5 h-5" />
          </IconButton>
        </div>
        <Button variant="secondary" className="text-sm font-semibold">
          Add app
        </Button>
      </header>
      <div className="flex flex-1 flex-col">
        {tab === "chat" && (
          <>
            <div className="p-4 flex-1 space-y-6">
              {CHAT_MESSAGES.map(message => (
                <div key={message.id} className="flex space-x-2">
                  <Avatar
                    size="md"
                    name={message.user.name}
                    src={message.user.avatar}
                  />
                  <div className="flex flex-1 flex-col space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{message.user.name}</span>
                      <span className="text-xs text-gray">{message.time}</span>
                    </div>
                    <p className="text-sm font-medium text-black text-opacity-75 bg-light rounded-2xl rounded-tl-none p-2">
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleFormSubmit}
              className="p-4 border-t border-lightGray flex items-center space-x-2"
            >
              <EmojiHappyIcon className="w-5 h-5 text-black text-opacity-50" />
              <input
                className="flex-1 w-full h-full text-black text-opacity-75 text-sm focus:outline-none"
                placeholder="Write your message..."
              />
            </form>
          </>
        )}
      </div>
    </div>
  )
}
