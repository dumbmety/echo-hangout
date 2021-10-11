import Link from "next/link"
import SimpleBar from "simplebar-react"
import {
  CalendarIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
  VideoCameraIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline"

export default function Navigation() {
  return (
    <SimpleBar className="w-64 h-screen">
      <div className="flex flex-col bg-white divide-y divide-lightGray">
        {/* Team Name */}
        <header className="p-4 h-14">
          <h2 role="heading" className="text-lg font-bold">
            Linear Team
          </h2>
        </header>

        {/* Main Links */}
        <ul role="list" className="py-4 px-3 space-y-2 select-none">
          <li role="listitem">
            <Link href="/teams/linear">
              <a className="p-2 flex items-center rounded-lg focus:outline-none focus:ring space-x-2 text-sm font-semibold transition duration-150 ease-in-out hover:bg-light">
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li role="listitem">
            <Link href="/teams/linear/rooms">
              <a className="p-2 flex items-center rounded-lg focus:outline-none focus:ring space-x-2 text-sm font-semibold transition duration-150 ease-in-out text-white bg-blue">
                <UsersIcon className="w-5 h-5" />
                <span>Rooms</span>
              </a>
            </Link>
          </li>
          <li role="listitem">
            <Link href="/teams/linear/events">
              <a className="p-2 flex items-center rounded-lg focus:outline-none focus:ring space-x-2 text-sm font-semibold transition duration-150 ease-in-out hover:bg-light">
                <CalendarIcon className="w-5 h-5" />
                <span>Events</span>
              </a>
            </Link>
          </li>
          <li role="listitem">
            <Link href="/teams/linear/people">
              <a className="p-2 flex items-center rounded-lg focus:outline-none focus:ring space-x-2 text-sm font-semibold transition duration-150 ease-in-out hover:bg-light">
                <UserIcon className="w-5 h-5" />
                <span>People</span>
              </a>
            </Link>
          </li>
        </ul>

        {/* Rooms */}
        <div className="flex-1 py-4 px-3 select-none space-y-4">
          <div className="space-y-2">
            <header className="px-3 flex items-center space-x-2 cursor-pointer">
              <ChevronDownIcon className="w-4 h-4" />
              <h3 role="heading" className="font-bold">
                Started
              </h3>
            </header>
            <ul role="list">
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-1">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VideoCameraIcon className="w-5 h-5" />
                      <span>Lo-fi Hangouts</span>
                    </div>
                    <span className="w-2 h-2 bg-black rounded-full" />
                  </a>
                </Link>
              </li>
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-2">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VideoCameraIcon className="w-5 h-5" />
                      <span>Echo-studio</span>
                    </div>
                    <span className="w-2 h-2 bg-black rounded-full" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <header className="px-3 flex items-center space-x-2 cursor-pointer">
              <ChevronDownIcon className="w-4 h-4" />
              <h3 role="heading" className="font-bold">
                Recent
              </h3>
            </header>
            <ul role="list">
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-3">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VideoCameraIcon className="w-5 h-5" />
                      <span>Paradise</span>
                    </div>
                    <span className="w-2 h-2 bg-black rounded-full" />
                  </a>
                </Link>
              </li>
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-4">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VolumeUpIcon className="w-5 h-5" />
                      <span>Audio Drop-ins</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <header className="px-3 flex items-center space-x-2 cursor-pointer">
              <ChevronDownIcon className="w-4 h-4" />
              <h3 role="heading" className="font-bold">
                All Rooms
              </h3>
            </header>
            <ul role="list">
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-1">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VideoCameraIcon className="w-5 h-5" />
                      <span>Lo-fi Hangouts</span>
                    </div>
                    <span className="w-2 h-2 bg-black rounded-full" />
                  </a>
                </Link>
              </li>
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-2">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VideoCameraIcon className="w-5 h-5" />
                      <span>Echo-studio</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-3">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VolumeUpIcon className="w-5 h-5" />
                      <span>Audio Room</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-4">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VolumeUpIcon className="w-5 h-5" />
                      <span>Audio Drop-ins</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li role="listitem">
                <Link href="/teams/linear/rooms/room-5">
                  <a className="p-2 flex items-center justify-between rounded-lg focus:outline-none font-semibold transition duration-150 ease-in-out hover:bg-light">
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <VolumeUpIcon className="w-5 h-5" />
                      <span>Echo-studio</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SimpleBar>
  )
}
