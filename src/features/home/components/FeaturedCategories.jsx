import CategoryCard from "./CategoryCard";

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      title: "Elektronik",
      image: "https://loremflickr.com/640/360/electronics",
      colClass: "col-md-6 col-lg-4 mb-4",
    },
    {
      id: 2,
      title: "Moda & Giyim",
      image: "https://loremflickr.com/640/360/clothing,fashion",
      colClass: "col-md-6 col-lg-4 mb-4",
    },
    {
      id: 3,
      title: "Mücevher & Takı",
      image: "https://loremflickr.com/640/360/jewelry,necklace",
      colClass: "col-md-6 col-lg-4 mx-auto mb-4",
    },
  ];

  return (
    <>
      <h2 className="text-center mb-4 border-bottom pb-2">
        Popüler Kategoriler
      </h2>

      <div className="row mb-5">
        {categories.map((cat) => (
          <div key={cat.id} className={cat.colClass}>
            <CategoryCard title={cat.title} image={cat.image} />
          </div>
        ))}
      </div>
    </>
  );
}
