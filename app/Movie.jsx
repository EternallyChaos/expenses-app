import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="bg-gray-700 pb-2 rounded-lg flex flex-col justify-start items-center gap-2">
      <Link href={`/${id}`}>
        <Image
          className="rounded-t-lg"
          src={imagePath + poster_path}
          width={600}
          height={600}
          alt={title}
        />
      </Link>
      <h1 className="text-red-500 text-xl p-1">{title}</h1>
      <h2>Release Date: {release_date}</h2>
    </div>
  );
}
