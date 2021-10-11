import { ReactNode } from "react"
import { classNames } from "../../utils/classNames"

type Props = {
  type?: "button" | "submit" | "reset"
  variant: "primary" | "secondary" | "tertiary" | "danger"
  className?: string
  onClick?: () => void
  children: ReactNode
}

export default function Button(props: Props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={classNames(
        props.className,
        "px-3 p-1.5 select-none cursor-pointer focus:outline-none focus:ring",
        "transition duration-150 ease-in-out",
        props.variant === "primary" && "bg-blue text-white rounded-lg",
        props.variant === "secondary" &&
          "bg-blue bg-opacity-5 text-blue rounded-lg",
        props.variant === "danger" &&
          "bg-red bg-opacity-10 text-red font-bold rounded-full",
      )}
    >
      {props.children}
    </button>
  )
}
