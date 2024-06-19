import Link from "next/link";

export default function HomeView() {
  return (
    <div>
      <div>
        <h1>Ini Halaman Home</h1>
        <div>
          <button>
            <Link href="view/home/sections">Go to Article Sections</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
