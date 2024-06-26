
import Card from '@/app/_components/card'
import Table from '@/app/_components/tables'
import typo from "@/styles/helpers/_typography.module.scss"
import styles from "@/styles/pages/users.module.scss"


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

const headers = ['organization', 'username', "email", "phone number","date joined","status"];
const userStatuses = ['active', 'inactive', 'blacklisted', 'pending'];
const companies = ['lendsqr', 'google', 'lendstar', 'irorun'];

export default async function Users() {
  const response = await fetch(`https://randomuser.me/api/?results=500`);
  const {results}= await response.json();


  // altering the random data to add other params
  const usersWithStatus = results?.map((user:any) => {
   const  {name,email,registered,phone,login, gender}=user
    return {
      name:name.first + " " + name.last,
      email:`${name.first + "." + name.last}@gmail.com`,
      phone:phone,
      date:registered.date,
      organization:companies[Math.floor(Math.random() * companies.length)],
      status: userStatuses[Math.floor(Math.random() * userStatuses.length)],
      id:login.uuid,
      gender,
     };
  });

// console.log(usersWithStatus)

  return (
    <div className={styles.other_container}>
      <p className={typo.header_text}>users</p>
      <div className={styles.card_container}>
        {
          cards.map(card=>{
            return <Card key={card.text} cardProp={card} />
          })
        }
      </div>
        <Table data={usersWithStatus} headers={headers} />
    </div>
  )
}
