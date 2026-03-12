const skillCategories = [
  {
    title: "Dados & BI",
    skills: ["SQL Server (T-SQL)", "SAP Crystal Reports", "Modelagem de Dados", "Stored Procedures", "Otimização de Queries"],
  },
  {
    title: "Infra & Sistemas",
    skills: ["Admin. Windows/Linux", "Segurança de Redes", "Gestão de Incidentes (ITIL)", "Troubleshooting Crítico", "Suporte Nível 2"],
  },
  {
    title: "Desenvolvimento",
    skills: ["React / Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Git / GitHub", "APIs REST"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Habilidades</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-md p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
