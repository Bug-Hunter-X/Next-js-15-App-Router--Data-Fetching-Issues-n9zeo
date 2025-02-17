```javascript
// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
```javascript
// app/page.js

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return (
    <div>Hello, {data.title}</div>
  );
}
```