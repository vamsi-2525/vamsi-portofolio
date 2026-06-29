import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // TODO: Log download event to Supabase when connected
  console.log('📥 Resume downloaded from:', req.headers.get('user-agent'));

  return NextResponse.redirect(new URL('/resume/vamsi-krishna-resume.pdf', req.url));
}
