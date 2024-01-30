export default function MoreBtn({ loadContent }) {
  return (
    <div className="flex justify-center my-4">
      <button className="btn btn-primary" onClick={() => loadContent(100)}>
        More
      </button>
    </div>
  );
}
