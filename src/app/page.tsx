import Link from "next/link";
import {db} from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

  return (
    <main className="">
      <div className="container flex flex-wrap gap-4">{
        images.map((image) => (
          <Link key={image.id} href={`/image/${image.id}`} className="block w-48 p-2">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="w-full h-auto"
            />
          </Link>
        ))
      }
      </div>
    </main>
  );
}
