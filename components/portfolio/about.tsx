export function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sobre Mim</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Olá! Sou o Eduardo. Minha trajetória na tecnologia começou com a curiosidade em entender como os sistemas processam informações. Hoje, atuo na linha de frente da TI, cuidando da saúde de bancos de dados <strong>SQL Server</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              No meu dia a dia, sou responsável por resolver problemas críticos e garantir que a diretoria tenha relatórios precisos via <strong>SAP Crystal Reports</strong>. Mais do que apenas "consertar máquinas", meu foco é garantir que os dados fluam corretamente para que a empresa não pare.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Além da infraestrutura e dados, estou expandindo meus horizontes para o desenvolvimento <strong>Full Stack</strong>, criando aplicações modernas com React e Node.js para automatizar processos e melhorar a experiência do usuário.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-4">
                Tecnologias que tenho trabalhado recentemente:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "SQL Server (T-SQL)",
                  "SAP Crystal Reports",
                  "React / Next.js",
                  "Node.js",
                  "TypeScript",
                  "Linux / Windows Server",
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-md" />
              <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative w-full h-full bg-secondary rounded-md overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl text-muted-foreground">
                  👤
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
