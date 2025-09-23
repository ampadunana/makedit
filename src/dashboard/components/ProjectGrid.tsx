import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";

const items = [
  { title: "Perfume A", before: "/demo/before1.jpg", after: "/demo/after1.jpg" },
  { title: "Perfume B", before: "/demo/before2.jpg", after: "/demo/after2.jpg" },
  { title: "Perfume C", before: "/demo/before3.jpg", after: "/demo/after3.jpg" },
];

export default function ProjectGrid() {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Projects</h3>
        <FilterBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <ProjectCard key={idx} title={i.title} before={i.before} after={i.after} />
        ))}
      </div>
    </section>
  );
}