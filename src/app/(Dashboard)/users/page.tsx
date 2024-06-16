import Card from '@/app/_components/card'
import React from 'react'
import styles from "@/styles/pages/users.module.scss"
import Table from '@/app/_components/tables'


const cards = [
  {
    img:"/images/users.png",
    number:2453,
    text:"users"
  },
  {
    img:"/images/active.png",
    number:2453,
    text:"active users"
  },
  {
    img:"/images/loans.png",
    number:12453,
    text:"users with loans"
  },
  {
    img:"/images/savings.png",
    number:102453,
    text:"users with savings"
  },
]

const data = [
  { id: 1, cells: [{ id: 'cell1', value: 'Item 1' }, { id: 'cell2', value: 'Value 1' }] },
  { id: 2, cells: [{ id: 'cell3', value: 'Item 2' }, { id: 'cell4', value: 'Value 2' }] },
];

const headers = ['organization', 'username', "email", "phone number","date joined","status"];
const userStatuses = ['active', 'inactive', 'blacklisted', 'pending'];
const companies = ['lendsqr', 'google', 'lendstar', 'irorun'];

export default async function Users() {
  const response = await fetch(`https://randomuser.me/api/?results=500`);
  const {results}= await response.json();

  // altering the random data to add other params
  const usersWithStatus = results?.map((user:any) => {
   const  {name,email,registered,phone}=user
    return {
      name:name.first + name.last,
      email:email,
      phone:phone,
      date:registered.date,
      organization:companies[Math.floor(Math.random() * companies.length)],
      status: userStatuses[Math.floor(Math.random() * userStatuses.length)]
     };
  });

// console.log(usersWithStatus)

  return (
    <div>
      <div className={styles.card_container}>
        {
          cards.map(card=>{
            return <Card key={card.text} cardProp={card} />
          })
        }
      </div>
      <section>
        <Table data={usersWithStatus} headers={headers} />
      </section>
    </div>
  )
}
