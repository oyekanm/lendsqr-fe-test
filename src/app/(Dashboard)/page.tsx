'use client'

import styles from "@/styles/pages/home.module.scss"
import Card from "../_components/card";
import { getUser } from "@/lib/getUser";


const cards = [
  {
    img: "/images/users.png",
    number: 2453,
    text: "users"
  },
  {
    img: "/images/active.png",
    number: 2453,
    text: "active users"
  },
  {
    img: "/images/loans.png",
    number: 12453,
    text: "users with loans"
  },
  {
    img: "/images/savings.png",
    number: 102453,
    text: "users with savings"
  },
]

export default function Home() {
  const user = getUser()
  const name = user?.name.split(" ")

  const newName = name? name![0] : "lendsqr"
  // console.log(user)
  return (
    <div className={styles.home}>
      <p className={styles.welcome_text}>Welcome, <span>{newName}</span></p>
      <div className={styles.card_container}>
        {
          cards.map(card => {
            return (
              <Card
                key={card.text}
                cardProp={card} />)
          })
        }
      </div>
    </div>
  );
}
