import { Container } from "@/components/ui/Container";
import type { LegalPageContent } from "@/content/legal";

export function LegalPage({ title, content }: { title: string; content: LegalPageContent }) {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
          {content.lastUpdated}
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-charcoal">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-charcoal/72">{content.intro}</p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section className="border-t border-olive/20 pt-6" key={section.title}>
              <h2 className="font-serif text-3xl leading-tight text-charcoal">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-charcoal/72">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-olive/20 pt-6 text-sm leading-7 text-charcoal/60">
          {content.note}
        </p>
      </Container>
    </section>
  );
}
