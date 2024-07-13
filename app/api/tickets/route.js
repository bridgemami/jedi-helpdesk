import { NextResponse } from "next/server"; 
//any route handler defined in this file would be dynamic
export const dynamic = 'force-dynamic'

//must be called GET
 export async function GET() {
    const res = await fetch("http://localhost:4000/tickets");
    const tickets = await res.json();
    return NextResponse.json(tickets, {
      status: 200,
    });
}

//must be called POST

export async function POST(request) {
    const ticket = await request.json()
   const res = await fetch("http://localhost:4000/tickets",{ 
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)        
        })
        const newTicket= await res.json()
        return NextResponse.json(newTicket, {
            status:201
        })
}

 