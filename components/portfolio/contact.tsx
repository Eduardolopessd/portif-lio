import Link from "next/link"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">04. E agora?</span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
          Vamos Conversar
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Atualmente estou aberto a novas oportunidades. Se você tem uma pergunta,
          quer discutir um projeto ou apenas quer dizer olá, minha caixa de entrada
          está sempre aberta. Farei o meu melhor para responder!
        </p>

        <Link
          href="mailto: eduardolopess1221@gmail.com"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-md font-medium hover:bg-primary/10 transition-colors"
        >
          <Mail className="h-5 w-5" />
          Enviar Email
        </Link>
      </div>
    </section>
  )
}
