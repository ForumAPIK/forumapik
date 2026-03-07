# Partner Logos

Place partner organization logos in this directory.

## Required Logo Files

### Row 1 (Left-moving):
- `snu.png` - Seoul National University logo
- `kaist.png` - KAIST logo
- `kbri.png` - KBRI Seoul logo
- `brin.png` - Badan Riset dan Inovasi Nasional logo
- `its.png` - Institut Teknologi Sepuluh Nopember logo
- `aintlab.png` - AINTLab logo

### Row 2 (Right-moving):
- `unist.png` - UNIST logo
- `skku.png` - Sungkyunkwan University logo
- `perpika.png` - PERPIKA logo
- `imuska.png` - IMUSKA logo
- `ipakr.png` - IPAKR logo

## Logo Guidelines

- **Format**: PNG with transparent background (preferred) or JPG
- **Dimensions**: Square ratio recommended (e.g., 200x200px, 400x400px)
- **Size**: Keep under 100KB per file
- **Quality**: High resolution for clarity
- **Naming**: Use lowercase filenames matching the list above

## Fallback Behavior

If a logo image is not found or fails to load, the component will automatically display a text badge with the organization's short name instead.

## Adding New Partners

1. Add the logo file to this directory
2. Update `src/components/PartnerMarquee/index.tsx`:
   - Add new partner object with `logo: '/img/partners/filename.png'`
   - Include: name, short, kind, href, and logo path
