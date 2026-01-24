import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

// Valid image slot IDs
const validSlots = [
  'hero/hero-top',
  'hero/hero-rooms',
  'hero/hero-dining',
  'hero/hero-experience',
  'hero/hero-access',
  'hero/hero-faq',
  'hero/hero-reserve',
  'rooms/rooms-overview',
  'rooms/rooms-window',
  'rooms/rooms-wall',
  'rooms/rooms-lighting',
  'rooms/rooms-amenity',
  'rooms/rooms-washbasin',
  'rooms/rooms-bath',
  'dining/dining-counter',
  'dining/dining-dish',
  'dining/dining-detail',
  'experience/experience-morning',
  'experience/experience-checkin',
  'experience/experience-dinner',
  'experience/experience-night',
  'access/access-surroundings',
]

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const id = formData.get('id') as string

    // Validation
    if (!file || !id) {
      return NextResponse.json(
        { error: 'File and ID are required' },
        { status: 400 }
      )
    }

    if (!validSlots.includes(id)) {
      return NextResponse.json(
        { error: 'Invalid image slot ID' },
        { status: 400 }
      )
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: JPG, PNG, WebP' },
        { status: 400 }
      )
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size: 10MB' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Determine save path
    const [category] = id.split('/')
    const uploadDir = path.join(process.cwd(), 'public', 'images', category)

    // Create directory if it doesn't exist
    await mkdir(uploadDir, { recursive: true })

    // Save as JPG (keeping original extension info in the process)
    const fileName = id.split('/')[1]
    const filePath = path.join(uploadDir, `${fileName}.jpg`)

    // Write file
    await writeFile(filePath, buffer)

    // Also remove the SVG placeholder if it exists
    const svgPath = path.join(uploadDir, `${fileName}.svg`)
    try {
      const { unlink } = await import('fs/promises')
      await unlink(svgPath)
    } catch {
      // SVG doesn't exist, that's fine
    }

    return NextResponse.json({
      success: true,
      message: `${id}.jpg uploaded successfully`,
      path: `/images/${id}.jpg`,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}
