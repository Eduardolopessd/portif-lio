import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4">Olá, meu nome é</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          <span className="text-balance">Eduardo Lopes</span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
          <span className="text-balance">Transformando dados em inteligência de negócio.</span>
        </h2>

        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10">
          Tecnólogo em TI especializado em <strong>SQL Server</strong> e <strong>SAP Crystal Reports</strong>.
          Focado em administrar ambientes críticos, otimizar bancos de dados e construir soluções
          digitais eficientes.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="#projetos"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Ver Projetos
            <ArrowDown className="h-4 w-4" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Eduardolopessd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eduardo-lopes1221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:eduardolopess1221@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
