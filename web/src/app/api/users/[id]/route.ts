import { NextRequest, NextResponse } from 'next/server'

export async function DELETE (
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params?.id

  const response = await fetch(`http://host.docker.internal:3002/users/${id}`, {
    method: 'DELETE'
  })

  return NextResponse.json(await response.json())
}

export async function PUT (
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params?.id

  const data = await request.json()

  const response = await fetch(`http://host.docker.internal:3002/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return NextResponse.json(await response.json())
}
