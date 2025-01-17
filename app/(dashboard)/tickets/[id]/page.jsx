import Loading from "@/app/(dashboard)/loading";
import { notFound } from "next/navigation";
import { Suspense } from "react";
//takes it to the 404 page
export const dynamicParams = true

export async function generateMetadata ({ params }) {
  const id = params.id
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json()

  return { 
    title: `Jedi Helpdesk | ${ticket.title}`,
  }
}

//get all ids at build time
export async function generateStaticParams() {
  const resp = await fetch(`http://localhost:4000/tickets`);
  const tickets = await resp.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound(); //404 page
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <Suspense fallback={<Loading />}>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>priority</div>
        </div>
      </Suspense>
    </main>
  );
}
