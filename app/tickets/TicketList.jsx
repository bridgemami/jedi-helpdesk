async function getTickets() {
    const res= await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache
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
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0,200)}...</p>
        <div className={`pill ${ticket.priority}`}>priority</div>
    </section>
   ))}
   </>
  )
}
