---
title: Hero Slider Image Guidelines
description: Perfect image sizes and specifications for APIK hero slider
---

# Hero Slider Image Size Tutorial

This guide provides the optimal image specifications for the APIK hero slider component to ensure crisp, fast-loading, and responsive display across all devices.

## Quick Summary

| Specification | Recommendation |
|---|---|
| **Aspect Ratio** | 16:9 (widescreen) |
| **Resolution** | 2560×1440px |
| **Format** | WebP (primary), JPG (fallback) |
| **File Size** | 300-500KB (compressed) |
| **Height** | Desktop: 600px, Tablet: 500px, Mobile: 400px |

## Recommended Image Dimensions

### Primary Recommendation: 2560×1440px (16:9)

This single resolution works perfectly across all devices:

- **Desktop screens (27" and above):** Displays crisply at full resolution
- **Tablets (10" and larger):** Scales down smoothly
- **Mobile phones:** Automatically downscaled by browser
- **Retina/4K displays:** High DPI coverage

### Why 16:9 Aspect Ratio?

- Most common and familiar format for users
- Works perfectly with your slider's `object-fit: cover` CSS property
- Fills the entire hero section without distortion
- Standard for professional presentations and media

### Device-Specific Breakdown

| Device | Viewport Width | Display Height | Recommended Size |
|---|---|---|---|
| **Desktop** | 1920px+ | 600px | 2560×1440px |
| **Tablet** | 768-1024px | 500px | 1920×1080px (can reuse) |
| **Mobile** | 320-480px | 400px | 1280×720px (can reuse) |

**Note:** Use a single 2560×1440px image—your CSS and browser handle scaling automatically.

## File Format & Optimization

### Format Comparison

| Format | Pros | Cons | Best For |
|---|---|---|---|
| **WebP** | Smallest file size, excellent quality | Older browser support | Primary format |
| **JPG** | Universal support, good compression | Larger than WebP | Fallback |
| **PNG** | Lossless, supports transparency | Very large files | Not recommended for photos |

### Recommended Compression Settings

**WebP Format:**
- Quality: 80-85%
- Size: 300-400KB

**JPG Format (Fallback):**
- Quality: 85-90%
- Progressive: Yes
- Size: 400-500KB

### Optimization Tools

1. **Squoosh** (Google): https://squoosh.app
   - Drag-and-drop conversion
   - Compare formats side-by-side
   - Real-time quality adjustment

2. **TinyPNG/TinyJPG**: https://tinypng.com
   - Batch processing up to 20 files
   - Smart lossy compression

3. **ImageOptim** (macOS):
   - Automatic optimization
   - Supports all formats

4. **ImageMagick** (CLI):
   ```bash
   # WebP conversion
   convert input.jpg -quality 85 output.webp
   
   # Progressive JPG
   convert input.jpg -interlace Plane -quality 85 output.jpg
   ```

## Image Composition Best Practices

### Content Positioning

**Your slider uses `object-position: center`**, which means:
- ✅ Keep important content in the **center of the image**
- ❌ Avoid critical elements at the edges (may be cropped on mobile)
- ✅ Leave 15% margin on all sides for important text/logos

### Image Guidelines

1. **Subject Positioning:**
   - Center the main subject
   - Leave breathing room around focal points
   - Follow the rule of thirds for visual balance

2. **Text & Overlay Compatibility:**
   - Your slider adds a dark overlay (`rgba(0, 0, 0, 0.4)`)
   - Consider contrast when adding text
   - Avoid light images that become too dark with overlay

3. **Color Harmony:**
   - APIK brand color: #9b1e1a (deep red)
   - Overlay adds slight coolness—test in both light and dark modes
   - Saturated colors work better than pastels

4. **Resolution with Overlay:**
   - Dark overlay slightly reduces perceived sharpness
   - Use higher-quality compression (80-85%) to compensate
   - High-contrast images work better with overlay

## Implementation in APIK

### Slider Component Usage

Your images are configured in `src/pages/index.tsx`:

```typescript
const heroSlides: SlideItem[] = [
  {
    type: 'image',
    src: '/img/your-image.webp',  // Primary WebP format
    alt: 'Description for accessibility',
  },
  // Add more slides...
];
```

### CSS Performance Features

Your slider already includes optimization:

```css
/* High-quality rendering */
image-rendering: high-quality;

/* Hardware acceleration */
transform: translateZ(0);
will-change: transform;

/* Smooth transitions */
transition: opacity 0.8s ease-in-out;
```

### Responsive Height Reference

- **Desktop (>996px):** 600px height
- **Tablet (768px-996px):** 500px height
- **Mobile (<768px):** 400px height

## Step-by-Step: Adding Your Image

### 1. Prepare Your Image

```bash
# If using ImageMagick
convert your-photo.jpg -resize 2560x1440 -quality 85 \
  -interlace Plane photo-optimized.jpg

# Convert to WebP
convert photo-optimized.jpg -quality 85 photo.webp
```

### 2. Place in Static Folder

```
/static/
  └── img/
      ├── photo.webp (300-400KB)
      └── photo.jpg (400-500KB for fallback)
```

### 3. Update Slider Configuration

Edit `src/pages/index.tsx`:

```typescript
const heroSlides: SlideItem[] = [
  {
    type: 'image',
    src: '/img/photo.webp',
    alt: 'APIK Collaboration and Research',
  },
  // ... other slides
];
```

## File Size Checklist

- [ ] Image is exactly 2560×1440px
- [ ] Compressed to 300-500KB
- [ ] Saved in WebP format (+ JPG backup)
- [ ] Placed in `/static/img/` folder
- [ ] URL referenced correctly in slider config
- [ ] Alt text is descriptive for accessibility
- [ ] Image tested on mobile, tablet, and desktop

## Performance Impact

### Load Time Estimates

With proper optimization:
- **WebP (350KB):** ~350ms on 4G, ~35ms on broadband
- **JPG Fallback (450KB):** ~450ms on 4G, ~45ms on broadband

### Recommendations

- Use **lazy loading** for below-the-fold images (already handled by Docusaurus)
- **Preload** hero images for faster first paint
- Monitor performance with Lighthouse (Google DevTools)

## Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| Blurry on mobile | Asset too small | Use 2560×1440px minimum |
| Slow load | Large file size | Compress to 300-500KB |
| Poor quality | Over-compressed | Increase quality to 80-85% |
| Cut off on edges | Bad composition | Center important elements |
| Dark overlay too intense | Image too light | Use darker images or reduce overlay opacity |

## References

- [MDN: object-fit & object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [WebP Image Format Guide](https://developers.google.com/speed/webp)
- [Responsive Images (srcset)](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Image Optimization Guide](https://web.dev/image-optimization/)

---

**Last Updated:** March 8, 2026  
**APIK Hero Slider v1.0**
