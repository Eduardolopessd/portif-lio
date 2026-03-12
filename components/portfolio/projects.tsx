import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Plataforma E-commerce",
    description:
      "Uma plataforma completa de e-commerce com carrinho de compras e painel administrativo para gestão de produtos e pedidos.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/Eduardolopessd/multi-tenant-e-commerce/tree/main",
    live: "https://v0-ecommerce-multi.vercel.app/loja/cc330897-f860-4dba-8d8b-49e7d6a80c5a",
  },
  {
    title: "App de Gestão Inventário",
    description:
      " Um site para gestão de TI para patrimônio com setores, o código do patrimônio.",
    tags: ["Java", "Docker", "HTML, CSS e JS", "MySQL"],
    github: "https://github.com/Eduardolopessd/Inventario/tree/main",
  },
  {
    title: "APIRest",
    description:
      "API criado para um site interno para gerenciamento de pedido para expedição (separado por setor), notas com erro (Corrigidas e aguardando reenvio).",
    tags: ["Java", "Docker"],
    github: "https://github.com/Eduardolopessd/APIRest",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projetos</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid gap-20"> {/* Espaçamento entre os projetos */}
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="relative grid md:grid-cols-12 items-center gap-6"
            >
              {/* Imagem do Projeto */}
              <div
                className={`relative md:col-span-6 aspect-video bg-secondary rounded-md overflow-hidden shadow-xl z-10 
                ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors z-20" />
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🖼️
                </div>
              </div>

              {/* Informações do Projeto */}
              <div
                className={`relative md:col-span-6 z-30 flex flex-col p-4
                ${index % 2 === 1 ? "md:order-1 md:text-left" : "md:order-2 md:-ml-4 md:text-right"}`}
              >
                <p className="text-primary font-mono text-sm mb-2">Projeto em Destaque</p>
                <h3 className="text-xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <div className="bg-[#112240] p-5 rounded-md shadow-2xl mb-4 border border-border/50">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-3 mb-6 font-mono text-xs text-muted-foreground ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <Link href={project.github || "#"} className="hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={project.live || "#"} className="hover:text-primary transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}