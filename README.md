# Breathing Text Animation

A mesmerizing **BreathingText component** that creates a breathing effect using variable font weights. This repository includes the core component plus a Next.js showcase/demo interface to demonstrate its capabilities.

![Breathing Text Animation](https://github.com/yslati/breathing-text-animation/blob/main/public/preview.gif)

## 🌟 Live Demo

Check out the live demo: [breathing-text-animation.vercel.app](https://breathing-text-animation.vercel.app)

## ✨ Component Features

- **⚡ Lightweight**: Pure CSS animations with no heavy dependencies
- **🎨 Customizable**: Easy to style and integrate into any design system
- **📱 Responsive**: Works perfectly on all screen sizes and devices
- **🔤 Variable Font**: Uses font-variation-settings for smooth weight transitions
- **🎯 Plug & Play**: Simple component that can be dropped into any React/Nextjs project

**Showcase Demo**:
- Next.js 15, React 19
- Tailwind CSS 4
- Deployed on Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yslati/breathing-text-animation.git
cd breathing-text-animation
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💻 Usage

### Basic Usage

Import and use the `BreathingText` component in your React application:

```tsx
import { BreathingText } from '@/components/BreathingText'

function App() {
  return (
    <div>
      <BreathingText text="BREATHE" />
    </div>
  )
}
```

### Component Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `text` | `string` | The text to animate | Required |

### Customization

The animation uses CSS custom properties and can be easily customized:

```css
.breathe-logo {
  font-family: 'TheFont', sans-serif;
  animation: letter-breathe 3s ease-in-out infinite;
}

@keyframes letter-breathe {
  from, to {
    font-variation-settings: 'wght' 100;
  }
  50% {
    font-variation-settings: 'wght' 900;
  }
}
```

You can modify:
- **Animation duration**: Change `3s` to your preferred timing
- **Font weights**: Adjust the `wght` values (100-900)
- **Easing**: Modify `ease-in-out` for different animation curves

## 🎨 Styling

The component is styled with Tailwind CSS and includes:
- Responsive text sizing (`text-xl lg:text-4xl`)
- Beautiful gradient backgrounds
- Glassmorphism effects with backdrop blur
- Smooth hover transitions
- Modern button and input styling

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yassin Slati**
- GitHub: [@yslati](https://github.com/yslati)
- Project Link: [https://github.com/yslati/breathing-text-animation](https://github.com/yslati/breathing-text-animation)

## 🙏 Acknowledgments

- Font: [TF Mix Variable Font](https://garet.typeforward.com/) by TypeForward
- Inspiration from modern web animations and breathing meditation practices
- Next.js team for the amazing framework
- Vercel for seamless deployment

## 📊 Performance

- **Lighthouse Score**: 100/100
- **Bundle Size**: Minimal - only CSS animations
- **Loading Time**: Near-instant with optimized fonts
- **Accessibility**: Full keyboard navigation support

---

Made with ❤️ by [Yassin Slati](https://github.com/yslati)