# Image Replacement Guide

現在はプレースホルダーSVGが配置されています。
実際の画像に差し替える手順を説明します。

## ディレクトリ構造

```
public/images/
├── hero/           # ヒーロー画像 (16:9, 1920x1080)
├── rooms/          # 客室画像 (4:5 or 3:2)
├── dining/         # 料理画像 (4:5 or 3:2)
├── experience/     # 体験画像 (4:5)
├── access/         # アクセス画像 (3:2)
└── amenity/        # アメニティ画像 (1:1)
```

## 画像の差し替え方法

1. 各ディレクトリ内のSVGファイルを削除
2. 同名のJPG/PNG/WebPファイルを配置
3. `lib/siteImages.ts` の拡張子を更新

### 例: hero-top.svg を hero-top.jpg に差し替え

```bash
# 1. 新しい画像を配置
cp your-image.jpg public/images/hero/hero-top.jpg

# 2. SVGを削除
rm public/images/hero/hero-top.svg
```

```typescript
// lib/siteImages.ts
hero: {
  top: '/images/hero/hero-top.jpg',  // .svg → .jpg
  ...
}
```

## 推奨画像サイズ

| カテゴリ | アスペクト比 | 推奨サイズ |
|---------|------------|-----------|
| hero | 16:9 | 1920x1080 |
| gallery | 4:5 | 800x1000 |
| wide | 3:2 | 1200x800 |
| detail | 1:1 | 800x800 |

## 無料素材サイト

- [Unsplash](https://unsplash.com) - 商用利用可、クレジット不要
- [Pexels](https://pexels.com) - 商用利用可、クレジット不要

### 奈良・旅館向けキーワード

- nara deer (奈良の鹿)
- japanese inn
- tatami room
- ryokan
- japanese garden
- kaiseki cuisine
