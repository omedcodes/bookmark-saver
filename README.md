# Website Template Kit

A professional, modern website template with clean code architecture, responsive design, and best practices built-in.

## 📁 Folder Structure

```
Website-Template-KIT/
├── index.html                 # Main HTML file
├── package.json              # Project metadata and dependencies
├── .gitignore                # Git ignore file
├── README.md                 # This file
├── assets/
│   ├── icons/               # SVG and icon files
│   └── images/              # Image assets
└── src/
    ├── scripts/
    │   ├── index.js         # Main application entry point
    │   └── modules/         # JavaScript modules
    │       ├── navigation.js # Navigation functionality
    │       ├── forms.js     # Form handling
    │       └── scroll.js    # Scroll behaviors
    ├── styles/
    │   ├── variables.css    # CSS custom properties
    │   ├── base.css         # Base and normalize styles
    │   ├── utilities.css    # Utility classes
    │   ├── layout.css       # Layout components
    │   └── components.css   # Reusable components
    └── utils/
        ├── dom.js           # DOM manipulation helpers
        └── helpers.js       # Utility functions
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **CSS Variables** - Customizable colors, typography, spacing, and more
- **Semantic HTML** - Proper semantic markup for accessibility
- **Modular JavaScript** - Clean, organized module structure
- **Utility Classes** - Flexbox, spacing, text, and display utilities
- **Performance** - Optimized for fast loading and smooth interactions
- **Accessibility** - WCAG compliant with focus states and semantic markup
- **Dark Mode Ready** - CSS custom properties support dark mode

## 🚀 Getting Started

### Quick Start

1. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

2. **Edit Files**
   - Edit `index.html` to modify content
   - Edit CSS files in `src/styles/` for styling
   - Edit JavaScript in `src/scripts/` for functionality
   - Add images to `assets/images/`

### Customization

#### Colors
Edit CSS variables in [src/styles/variables.css](src/styles/variables.css):

```css
:root {
  --color-primary: #007bff;        /* Change primary color */
  --color-primary-dark: #0056b3;   /* Dark variant */
  --color-secondary: #6c757d;      /* Secondary color */
  /* ... more variables */
}
```

#### Typography
Update font variables in [src/styles/variables.css](src/styles/variables.css):

```css
--font-family-sans: 'Inter', sans-serif;
--font-family-display: 'Poppins', sans-serif;
```

#### Spacing & Sizing
Modify spacing scale in [src/styles/variables.css](src/styles/variables.css):

```css
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
```

## 📦 CSS Architecture

### Base Styles (`base.css`)
- Reset and normalize
- Typography
- Form elements
- Code styling

### Layout (`layout.css`)
- Container and grid system
- Navigation bar
- Hero section
- Sections and footer

### Components (`components.css`)
- Buttons
- Cards
- Forms
- Alerts and badges
- Feature cards

### Utilities (`utilities.css`)
- Flexbox utilities
- Text utilities
- Color utilities
- Spacing utilities
- Display utilities

### Variables (`variables.css`)
- Color palette
- Typography scale
- Spacing scale
- Border radius
- Shadows
- Transitions
- Z-index scale

## 🔧 JavaScript Modules

### Navigation (`modules/navigation.js`)
- Mobile menu toggle
- Smooth navigation
- Menu auto-close on link click

### Forms (`modules/forms.js`)
- Form validation
- Email validation
- Form submission handling

### Scroll (`modules/scroll.js`)
- Scroll event handling
- Intersection Observer for animations
- Smooth scroll behavior

### DOM Utils (`utils/dom.js`)
- DOM query shortcuts
- Class manipulation
- Element creation helpers

### Helpers (`utils/helpers.js`)
- Debounce and throttle
- Date formatting
- URL parameter parsing
- Local storage wrapper
- String utilities

## 🎯 Built-in Components

### Buttons
```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--lg">Large Button</button>
```

### Cards
```html
<div class="card">
  <div class="card__header">Header</div>
  <div class="card__body">Content</div>
  <div class="card__footer">Footer</div>
</div>
```

### Alerts
```html
<div class="alert alert--success">Success message</div>
<div class="alert alert--error">Error message</div>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-input" required>
</div>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

Media queries use mobile-first approach. Adjust in [src/styles/variables.css](src/styles/variables.css)

## 🌙 Dark Mode

Dark mode support is built-in using `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f1f5f9;
    --color-background: #1e293b;
    /* ... */
  }
}
```

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus-visible states on interactive elements
- ARIA labels where needed
- Color contrast compliance
- Keyboard navigation support

## 🔗 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)

## 📝 License

This template is open source and available under the MIT License.

## 💡 Tips

1. **Keep it Simple** - Start with the base template and add what you need
2. **CSS Variables** - Use variables instead of hardcoding values
3. **Mobile First** - Design for mobile, then enhance for larger screens
4. **Test Everywhere** - Test on multiple devices and browsers
5. **Performance** - Minimize CSS, minify JavaScript, optimize images

## 🤝 Contributing

Feel free to fork, modify, and use this template for your projects!

---

**Happy coding! 🎉**
