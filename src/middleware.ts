import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const viewCookie = request.cookies.get('view_type')

  if (!viewCookie) {
    const viewType = Math.random() < 0.5 ? 'grid' : 'list'
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24)

    response.cookies.set('view_type', viewType, {
      path: '/',
      expires,
      httpOnly: true,
    })
  }

  return response
}
