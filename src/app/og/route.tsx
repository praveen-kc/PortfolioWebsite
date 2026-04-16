import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') ?? 'Praveen K C'
  const subtitle = searchParams.get('subtitle') ?? 'Lead Unity Developer · XR Specialist'
  const category = searchParams.get('category') ?? ''

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0b0d12', padding: 60, flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', marginBottom: 16, background: '#3353ff', color: '#fff', padding: '6px 14px', borderRadius: 6, fontSize: 14, fontWeight: 500, width: 'fit-content' }}>{category || 'Portfolio'}</div>
        <div style={{ fontSize: 52, fontWeight: 700, color: '#f0ede6', lineHeight: 1.1, marginBottom: 16 }}>{title}</div>
        <div style={{ fontSize: 22, color: '#9a97a8' }}>{subtitle}</div>
        <div style={{ position: 'absolute', bottom: 40, right: 60, fontSize: 18, color: '#5a5870' }}>praveenkc.com</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
