import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex justify-center mt-10">
        <Link className="bg-gray-200 p-5 rounded" href="/expense">
          Head to the Expense Tracker
        </Link>
      </main>
    </>
  );
}
