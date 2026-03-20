export default function SiteHeader() {
  return (
    <div className="flex items-center justify-between pb-3">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-900 leading-tight">ClinRS AI</h1>
          <span className="text-xs font-normal text-slate-400">Simple tooling for clinical research</span>
        </div>
      </div>
    </div>
  );
}

