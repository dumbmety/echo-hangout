import { ChevronDownIcon, StarIcon, UserIcon } from "@heroicons/react/outline"
import { PlusIcon } from "@heroicons/react/solid"
import Avatar from "../App/Avatar"
import Button from "../App/Button"
import IconButton from "../App/IconButton"

export default function Topbar() {
  return (
    <div className="p-4 h-14 sticky top-0 flex items-center justify-between bg-white">
      <div className="flex items-center space-x-2">
        <h2 className="text-lg font-bold">Lo-fi Hangouts</h2>
        <IconButton variant="tertiary">
          <StarIcon className="w-4 h-4" />
        </IconButton>
        <IconButton
          variant="tertiary"
          className="flex items-center space-x-1 px-2 text-sm font-medium"
        >
          <span>18</span>
          <UserIcon className="w-4 h-4" />
        </IconButton>
        <IconButton variant="tertiary">
          <ChevronDownIcon className="w-4 h-4" />
        </IconButton>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="primary" className="flex items-center space-x-0.5">
          <PlusIcon className="w-5 h-5" />
          <span>Create</span>
        </Button>
        <Avatar
          size="sm"
          status="online"
          name="Mehdi Neysi"
          src="https://avatars.githubusercontent.com/u/68688806?v=4"
        />
      </div>
    </div>
  )
}
