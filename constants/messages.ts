import { USERS } from "./users"

export const CHAT_MESSAGES = [
  {
    id: 1,
    user: {
      name: USERS[0].name,
      avatar: USERS[0].image,
    },
    time: "5 mins",
    text: "See what I've found out recently. Design Without borders Africa launched the inaugural Design Fellowship for aspiring design change-makers in Africa with Cohort in 2019. The three months...",
  },
  {
    id: 2,
    user: {
      name: USERS[1].name,
      avatar: USERS[1].image,
    },
    time: "5 mins",
    text: "Welcome out new Dsigner, @Sofia Moon!",
  },
  {
    id: 3,
    user: {
      name: USERS[4].name,
      avatar: USERS[4].image,
    },
    time: "4 mins",
    text: "Discussion and further development of all aspects of design knowledge from cognition and philosophy, to methods and tools, from research theory to practice.",
  },
]
