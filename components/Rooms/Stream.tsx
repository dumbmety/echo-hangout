import {
  DesktopComputerIcon,
  EmojiHappyIcon,
  MicrophoneIcon,
  PencilIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline"
import { USERS } from "../../constants/users"
import { classNames } from "../../utils/classNames"
import Button from "../App/Button"
import IconButton from "../App/IconButton"

export default function Stream() {
  return (
    <div className="w-3/4 p-4 flex flex-col divide-y divide-lightGray border border-lightGray bg-white rounded-lg">
      <div className="py-4 flex-1">
        <div className="rounded-lg overflow-hidden space-y-1">
          <img
            className="w-full h-96"
            src="/images/screens/control-center.jpg"
            alt="Live sharing"
          />
          <div className="flex items-center space-x-1">
            <img
              className="h-32 w-full object-cover"
              src="/images/screens/control-center.jpg"
              alt="Live sharing"
            />
            <img
              className="h-32 w-full object-cover"
              src="/images/screens/control-center.jpg"
              alt="Live sharing"
            />
            <img
              className="h-32 w-full object-cover"
              src="/images/screens/control-center.jpg"
              alt="Live sharing"
            />
            <img
              className="h-32 w-full object-cover"
              src="/images/screens/control-center.jpg"
              alt="Live sharing"
            />
          </div>
        </div>
        <ul role="list" className="flex items-center justify-evenly py-4">
          {USERS.map(user => (
            <li
              key={user.id}
              role="listitem"
              className="flex flex-col items-center space-y-3"
            >
              <div className="relative">
                <img
                  className={classNames(
                    "w-16 h-16 rounded-full object-cover",
                    user.isTalking && "ring ring-offset-2 ring-blue",
                  )}
                  src={user.image}
                  alt={user.name}
                />
                {user.isMuted && (
                  <IconButton className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-1 bg-white shadow-sm">
                    <MicrophoneIcon className="w-4 h-4 text-opacity-75" />
                  </IconButton>
                )}
              </div>
              <span className="text-sm font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4 flex items-center justify-between">
        <div className="space-x-2">
          <IconButton variant="tertiary" className="p-2">
            <VideoCameraIcon className="w-6 h-6" />
          </IconButton>
          <IconButton variant="secondary" className="p-2">
            <MicrophoneIcon className="w-6 h-6" />
          </IconButton>
          <IconButton variant="tertiary" className="p-2">
            <DesktopComputerIcon className="w-6 h-6" />
          </IconButton>
          <IconButton variant="tertiary" className="p-2">
            <PencilIcon className="w-6 h-6" />
          </IconButton>
          <IconButton variant="tertiary" className="p-2">
            <EmojiHappyIcon className="w-6 h-6" />
          </IconButton>
        </div>
        <div>
          <Button variant="danger" className="py-2 px-6">
            Leave
          </Button>
        </div>
      </div>
    </div>
  )
}
