import { NextRequest, NextResponse } from 'next/server'

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
      waUrl: `https://wa.me/6281916567373?text=${waMessage}` 
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
