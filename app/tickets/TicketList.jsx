import Link from "next/link"
async function getTickets() {
    //imitate delay
    //await new Promise(res => setTimeout(res, 3000))
    const res= await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 60 // use 0 to opt out of using cache //60 seconds *60minutes* 24 hours
        }
    })
    return res.json()
}

export default async function TicketList() {
const tickets= await getTickets()

  return (
   <>
   {tickets.map(ticket => (
    <section key = {ticket.id} className="card my-5">
        <Link href={`tickets/${ticket.id}`}>
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0,200)}...</p>
        <div className={`pill ${ticket.priority}`}>priority</div>
        </Link>
    </section>
   ))}
   </>
  )
}
