type ImageItemProps = {
  id: number;
  src: string;
  isFeatured: boolean;
};

export default function ImageItem({ id,src,isFeatured,}: ImageItemProps) {
  return (
    <div className={isFeatured ? 'featured' : ""}>
      <img src={src} alt={`Image ${id}`} />
    </div>
  );
}