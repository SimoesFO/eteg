import { NextRequest, NextResponse } from 'next/server'

export async function GET () {
  const response = await fetch('http://host.docker.internal:3002/users')

  return NextResponse.json(await response.json())
}

export async function POST (request: NextRequest) {
  const data = await request.json()

  const response = await fetch('http://host.docker.internal:3002/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return NextResponse.json(await response.json())
}
