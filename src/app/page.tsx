import Link from "next/link";

const mockUrls = [
  "https://placehold.co/600x400/D00000/FFFFFF/png",
  "https://placehold.co/600x400/FF00FF/000000/png",
  "https://placehold.co/600x400/D0D0D0/FFFFFF/png",
  "https://placehold.co/600x400/FF0F00/000000/png"
];

const mockImages = mockUrls.map((url, index)=> ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {[...mockImages, ...mockImages, ...mockImages,].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
