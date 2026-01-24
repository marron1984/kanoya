'use client'

import { useState } from 'react'
import Link from 'next/link'

const imageSlots = [
  // Hero images
  { id: 'hero/hero-top', name: 'トップページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  { id: 'hero/hero-rooms', name: '客室ページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  { id: 'hero/hero-dining', name: '料理ページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  { id: 'hero/hero-experience', name: '過ごし方ページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  { id: 'hero/hero-access', name: 'アクセスページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  { id: 'hero/hero-faq', name: 'FAQページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  { id: 'hero/hero-reserve', name: '予約ページ ヒーロー', category: 'hero', size: '1920x1080 (16:9)' },
  // Room images
  { id: 'rooms/rooms-overview', name: '客室 概観', category: 'rooms', size: '1200x800 (3:2)' },
  { id: 'rooms/rooms-window', name: '客室 窓', category: 'rooms', size: '800x1000 (4:5)' },
  { id: 'rooms/rooms-wall', name: '客室 壁の質感', category: 'rooms', size: '800x1000 (4:5)' },
  { id: 'rooms/rooms-lighting', name: '客室 灯り', category: 'rooms', size: '800x1000 (4:5)' },
  { id: 'rooms/rooms-amenity', name: '客室 アメニティ', category: 'rooms', size: '1200x800 (3:2)' },
  { id: 'rooms/rooms-washbasin', name: '客室 洗面', category: 'rooms', size: '800x800 (1:1)' },
  { id: 'rooms/rooms-bath', name: '客室 浴室', category: 'rooms', size: '800x800 (1:1)' },
  // Dining images
  { id: 'dining/dining-counter', name: '料理 カウンター', category: 'dining', size: '1200x800 (3:2)' },
  { id: 'dining/dining-dish', name: '料理 一皿', category: 'dining', size: '800x1000 (4:5)' },
  { id: 'dining/dining-detail', name: '料理 器', category: 'dining', size: '800x1000 (4:5)' },
  // Experience images
  { id: 'experience/experience-morning', name: '体験 朝', category: 'experience', size: '800x1000 (4:5)' },
  { id: 'experience/experience-checkin', name: '体験 チェックイン', category: 'experience', size: '800x1000 (4:5)' },
  { id: 'experience/experience-dinner', name: '体験 夕食', category: 'experience', size: '800x1000 (4:5)' },
  { id: 'experience/experience-night', name: '体験 夜', category: 'experience', size: '800x1000 (4:5)' },
  // Access images
  { id: 'access/access-surroundings', name: 'アクセス 周辺', category: 'access', size: '1200x800 (3:2)' },
]

const categories = [
  { id: 'hero', name: 'ヒーロー画像', description: '各ページの背景画像' },
  { id: 'rooms', name: '客室', description: '客室ページの画像' },
  { id: 'dining', name: '料理', description: '料理ページの画像' },
  { id: 'experience', name: '過ごし方', description: '過ごし方ページの画像' },
  { id: 'access', name: 'アクセス', description: 'アクセスページの画像' },
]

export default function AdminPage() {
  const [uploads, setUploads] = useState<Record<string, string>>({})
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('hero')

  const handleFileChange = (id: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setUploads(prev => ({ ...prev, [id]: e.target?.result as string }))
    }
    reader.readAsDataURL(file)
  }

  const handleUpload = async (id: string) => {
    const input = document.getElementById(`file-${id}`) as HTMLInputElement
    const file = input?.files?.[0]
    if (!file) return

    setLoading(id)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('id', id)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        const data = await res.json()
        setMessage(`${id}.jpg をアップロードしました`)
        // Clear the upload preview after successful upload
        setUploads(prev => {
          const newUploads = { ...prev }
          delete newUploads[id]
          return newUploads
        })
      } else {
        const error = await res.text()
        setMessage(`アップロード失敗: ${error}`)
      }
    } catch (error) {
      setMessage(`エラー: ${error}`)
    } finally {
      setLoading(null)
    }
  }

  const filteredSlots = imageSlots.filter(slot => slot.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#F1E6D6]">
      {/* Header */}
      <header className="bg-[#2A1F17] text-[#F1E6D6] py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl tracking-wider">画像管理</h1>
            <p className="text-sm opacity-70">奈良 鹿のや</p>
          </div>
          <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            サイトに戻る
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-8 px-6">
        {/* Message */}
        {message && (
          <div className="mb-6 p-4 bg-[#2A1F17] text-[#F1E6D6] rounded text-sm tracking-wider">
            {message}
            <button
              onClick={() => setMessage('')}
              className="ml-4 opacity-70 hover:opacity-100"
            >
              閉じる
            </button>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#2A1F17] text-[#F1E6D6]'
                  : 'bg-white text-[#1C1511] hover:bg-[#2A1F17]/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-6">
          <p className="text-sm text-[#6E5A4B] tracking-wider">
            {categories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSlots.map((slot) => (
            <div key={slot.id} className="bg-white p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-medium text-[#1C1511] tracking-wider">{slot.name}</h2>
                  <p className="text-xs text-[#6E5A4B] mt-1">{slot.size}</p>
                </div>
              </div>

              {/* Image Preview */}
              <div className="aspect-video bg-[#F1E6D6] mb-4 overflow-hidden relative">
                <img
                  src={uploads[slot.id] || `/images/${slot.id}.svg`}
                  alt={slot.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect fill="#2A1F17" width="400" height="225"/><text x="200" y="112" font-family="serif" font-size="14" fill="#F1E6D6" text-anchor="middle" opacity="0.5">No Image</text></svg>')}`
                  }}
                />
                {loading === slot.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm">アップロード中...</span>
                  </div>
                )}
              </div>

              {/* Upload Form */}
              <div className="space-y-3">
                <input
                  id={`file-${slot.id}`}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileChange(slot.id, file)
                  }}
                  className="block w-full text-sm text-[#6E5A4B] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#F1E6D6] file:text-[#1C1511] hover:file:bg-[#2A1F17]/10 file:cursor-pointer"
                />

                {uploads[slot.id] && (
                  <button
                    onClick={() => handleUpload(slot.id)}
                    disabled={loading === slot.id}
                    className="w-full py-2 bg-[#1C1511] text-[#F1E6D6] text-sm tracking-wider hover:bg-[#2A1F17] transition-colors disabled:opacity-50"
                  >
                    {loading === slot.id ? 'アップロード中...' : 'アップロード'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 bg-white">
          <h3 className="font-medium text-[#1C1511] tracking-wider mb-4">使い方</h3>
          <ol className="text-sm text-[#6E5A4B] tracking-wider space-y-2 list-decimal list-inside">
            <li>カテゴリタブから編集したい画像を選択</li>
            <li>「ファイルを選択」から画像を選択（JPG/PNG/WebP）</li>
            <li>プレビューを確認して「アップロード」をクリック</li>
            <li>サイトに反映されます</li>
          </ol>
          <div className="mt-4 pt-4 border-t border-[#1C1511]/10">
            <p className="text-xs text-[#6E5A4B] tracking-wider">
              注意: Vercelでは一時的な保存となります。永続化にはVercel BlobまたはCloudinaryの設定が必要です。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
