import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/lib/constants'

const MAX_BODY_BYTES = 8_192
const MAX_FIELD_LENGTH = 500

function readField(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(req: NextRequest) {
  try {
    if (!req.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return NextResponse.json(
        { success: false, error: 'Content-Type harus application/json' },
        { status: 415, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const contentLength = Number(req.headers.get('content-length') ?? 0)
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, error: 'Request terlalu besar' },
        { status: 413, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const rawBody = await req.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, error: 'Request terlalu besar' },
        { status: 413, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const body: unknown = JSON.parse(rawBody)
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new TypeError('Invalid request body')
    }

    const fields = body as Record<string, unknown>
    const name = readField(fields.name, 100)
    const business = readField(fields.business, 150)
    const plan = readField(fields.plan, 100)
    const message = readField(fields.message)

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: 'Nama dan pesan wajib diisi' },
        { status: 422, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const waMessage = encodeURIComponent(
      `Hi Konten.ai! New consultation request:\nName: ${name}\nBusiness: ${business}\nPlan: ${plan}\nMessage: ${message}`
    )

    return NextResponse.json(
      { success: true, waUrl: `${SITE.wa}?text=${waMessage}` },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
