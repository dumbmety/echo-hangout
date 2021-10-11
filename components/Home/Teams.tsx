import Link from "next/link"
import SimpleBar from "simplebar-react"
import { PlusIcon } from "@heroicons/react/outline"

import { TEAMS } from "../../constants/teams"
import { classNames } from "../../utils/classNames"
import IconButton from "../App/IconButton"

export default function Teams() {
  return (
    <SimpleBar id="teams-sidebar" className="w-12 h-screen">
      <div className="p-2 space-y-3">
        <ul role="list" className="space-y-3">
          {TEAMS.map(({ isActive, name, slug, logo }) => (
            <li
              key={slug}
              role="listitem"
              title={name}
              className={classNames(
                "rounded-full",
                isActive ? "ring-2 ring-green" : "",
              )}
            >
              <Link href={`/teams/${slug}`}>
                <a>
                  <img
                    className="w-8 h-8 mx-auto rounded-full"
                    src={`/images/logos/${logo}`}
                    alt={name}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <IconButton className="w-8 h-8 mx-auto grid place-items-center bg-white shadow-sm">
          <PlusIcon className="w-5 h-5 text-blue" />
        </IconButton>
      </div>
    </SimpleBar>
  )
}
