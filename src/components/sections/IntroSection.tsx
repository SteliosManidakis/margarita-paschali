import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";

export function IntroSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="bg-sage/20 py-20 sm:py-28">
      <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
          {dictionary.common.brand}
        </p>
        <div>
          <h2 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            {dictionary.home.introTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/72">{dictionary.home.introBody}</p>
        </div>
      </Container>
    </section>
  );
}
