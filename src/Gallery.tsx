import ImageItem from "./ImageItem";

type Image = {
  id: number;
  src: string;
};

const images: Image[] = [
  {
    id: 1,
    src: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1016/600/400",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1018/600/400",
  },
];

export default function Gallery() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className='gallery'>


      {images.map((image) => (
        <ImageItem
        key={image.id}
        id={image.id}
        src={image.src}
        isFeatured={image.id === 1}
        />
      ))}
      </div>
    </div>
  );
}