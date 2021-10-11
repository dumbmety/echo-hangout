import { classNames } from "../../utils/classNames"

type Props = {
  name: string
  src: string

  size: "sm" | "md" | "lg"
  status?: "online" | "offline" | "busy"

  className?: string
}

export default function Avatar(props: Props) {
  return (
    <div
      className={classNames(
        props.className,
        "overflow-hidden relative",

        props.size === "lg" && "w-12 h-12",
        props.size === "md" && "w-10 h-10",
        props.size === "sm" && "w-8 h-8",
      )}
    >
      <img className="rounded-full" src={props.src} alt={props.name} />

      {props.status === "online" && (
        <span className="absolute bottom-0 right-0 bg-white rounded-full overflow-hidden w-2.5 h-2.5">
          <span className="absolute inset-0 bg-green transform scale-75 rounded-full" />
        </span>
      )}
    </div>
  )
}
