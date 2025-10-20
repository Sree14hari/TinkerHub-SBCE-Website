import Header from "@/components/landing/Header"

// import Footer from '@/components/landing/Footer';

export default async function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
       concepts page
      </main>
      {/* <Footer /> */}
    </div>
  );
}
