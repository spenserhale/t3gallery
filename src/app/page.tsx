import Link from "next/link";

const urls = [
  "https://w.wallhaven.cc/full/m3/wallhaven-m3m57k.jpg",
  "https://w.wallhaven.cc/full/7p/wallhaven-7pqvzv.jpg",
  "https://w.wallhaven.cc/full/5g/wallhaven-5g8r55.jpg",
  "https://w.wallhaven.cc/full/jx/wallhaven-jxqrw5.jpg",
  "https://w.wallhaven.cc/full/p9/wallhaven-p9x1ee.jpg",
  "https://w.wallhaven.cc/full/gp/wallhaven-gpxl97.jpg",
];

const images = urls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
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
