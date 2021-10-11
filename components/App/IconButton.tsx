import { ReactNode } from "react"
import { classNames } from "../../utils/classNames"

type Props = {
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "tertiary"
  className?: string
  onClick?: () => void
  children: ReactNode
}

export default function IconButton(props: Props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={classNames(
        props.className,
        "p-1 rounded-full select-none focus:outline-none focus:ring",
        "transition duration-150 ease-in-out",
        props.variant === "primary" && "bg-blue text-white",
        props.variant === "secondary" && "bg-black text-white",
        props.variant === "tertiary" && "bg-lightGray",
      )}
    >
      {props.children}
    </button>
  )
}
