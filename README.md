# [Your Name] Tutoring — website

A simple static site: `index.html`, `styles.css`, `script.js`. No build step — open `index.html` directly in a browser to preview.

## Replace before publishing

- Every `[bracketed placeholder]` in `index.html`: name, bio, subjects, prices, testimonials, email, phone.
- Hero photo: put an image in `images/` and replace the `.hero-photo` `<span>` in `index.html` with `<img src="images/your-photo.jpg" alt="Your Name">`.
- Page `<title>` at the top of `index.html`.

## Contact form note

The "Email Me" / "Call" buttons use `mailto:`/`tel:` links — no server needed, works on any free static host. If you want a real fill-out contact form later, add a free [Formspree](https://formspree.io) form action; GitHub Pages can't run server code on its own.
