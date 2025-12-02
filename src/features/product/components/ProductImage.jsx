export default function ProductImage({
  image,
  title,
  height = "auto",
  className = "img-fluid",
}) {
  return (
    <div className="text-center w-100">
      <img
        src={image}
        alt={title}
        className={`${className} rounded shadow-sm`}
        style={{ height: height, objectFit: "contain", maxWidth: "100%" }}
      />
    </div>
  );
}
