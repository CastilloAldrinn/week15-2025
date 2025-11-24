// app/about/page.tsx
export const metadata = {
  title: "About — Week15",
};

export default function AboutPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>About</h1>
      <p>
        Ini adalah halaman About untuk latihan Deployment dengan Vercel.
        Pastikan kamu sudah menjalankan project secara lokal di <code>localhost:3000/about</code>.
      </p>
    </main>
  );
}
