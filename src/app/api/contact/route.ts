import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/lib/constants'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // In a real app, you might save to a database or send an email here.
    // For now, we return the WhatsApp URL for the client to redirect.
    
    const waMessage = encodeURIComponent(
      `Hi Konten.ai! New consultation request:\nName: ${body.name}\nBusiness: ${body.business}\nPlan: ${body.plan}\nMessage: ${body.message}`
    )
    
    return NextResponse.json({ 
      success: true, 
      waUrl: `${SITE.wa}?text=${waMessage}` 
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
