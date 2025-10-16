import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8">
          <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
