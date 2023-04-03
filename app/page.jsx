import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex justify-center mt-10">
        <div className="flex flex-col gap-10">
          <Link className="bg-gray-200 p-5 rounded" href={"/expense"}>
            Head to the Expense Tracker
          </Link>
          <Link className="bg-gray-200 p-5 rounded" href={"/file"}>
            Head to the File Uploader
          </Link>
        </div>
      </main>
    </>
  );
}
