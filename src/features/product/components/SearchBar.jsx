export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="col-md-4">
      <input
        type="text"
        className="form-control"
        placeholder="Ürün ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
