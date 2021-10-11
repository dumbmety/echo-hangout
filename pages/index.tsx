import SimpleBar from "simplebar-react"

import Navigation from "../components/Home/Navigation"
import Teams from "../components/Home/Teams"
import Topbar from "../components/Home/Topbar"
import Stream from "../components/Rooms/Stream"

export default function HomePage() {
  return (
    <div className="h-screen flex divide-x divide-lightGray">
      <Teams />
      <Navigation />
      <SimpleBar className="flex-1 h-screen">
        <div className="flex flex-col divide-y divide-lightGray">
          <Topbar />
          <div className="p-4 flex flex-1 space-x-2">
            <Stream />
            <div className="w-1/4 border border-lightGray bg-white rounded-lg">
              Sidebar
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}
