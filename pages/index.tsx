import SimpleBar from "simplebar-react"

import Navigation from "../components/Home/Navigation"
import Stream from "../components/Rooms/Stream"
import StreamSidebar from "../components/Rooms/StreamSidebar"
import Teams from "../components/Home/Teams"
import Topbar from "../components/Home/Topbar"

export default function HomePage() {
  return (
    <div className="h-screen flex divide-x divide-lightGray">
      <Teams />
      <Navigation />
      <SimpleBar className="flex-1 max-h-screen">
        <div className="flex flex-col divide-y divide-lightGray h-screen">
          <Topbar />
          <div className="p-4 flex flex-1 space-x-2">
            <Stream />
            <StreamSidebar />
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}
