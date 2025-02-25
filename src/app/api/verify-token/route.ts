/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest, res: NextResponse) {
  const contentLength = req.headers.get('content-length') || '0';
  if (parseInt(contentLength) === 0) {
    return NextResponse.json({ valid: false, message: 'No data provided' }, { status: 400 });
  }

  const data = await req.json();
  const secretKey = process.env.NEXT_PUBLIC_STAFF_KEY;

  if (!data.token) {
    return NextResponse.json({ valid: false, message: 'Invalid token' }, { status: 400 });
  }

  if (!secretKey) {
    return NextResponse.json({ valid: false, message: 'Invalid token' }, { status: 400 });
  }

  try {
    const decoded = jwt.verify(data.token, secretKey, { algorithms: ['HS256'] });
    return NextResponse.json({ valid: true, message: 'Token is valid' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ valid: false, message: 'Invalid token' }, { status: 400 });
  }
}
