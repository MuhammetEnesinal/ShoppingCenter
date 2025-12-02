export default function CategoryFilter({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className="col-md-8 mb-3 mb-md-0">
      <div className="btn-group flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${
              selectedCategory === category ? "btn-dark" : "btn-outline-dark"
            } text-capitalize`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "all" ? "Tümü" : category}
          </button>
        ))}
      </div>
    </div>
  );
}
