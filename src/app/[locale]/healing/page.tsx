import Image from "next/image";
import type { Metadata } from "next";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  const dictionary = getDictionary(safeLocale);
  return {
    title: dictionary.seo.healingTitle,
    description: dictionary.healing.body,
    alternates: {
      canonical: `/${safeLocale}/healing`,
      languages: { el: "/el/healing", en: "/en/healing" },
    },
  };
}

export default async function HealingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "el");

  return (
    <>
      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              {dictionary.common.brand}
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight text-charcoal sm:text-6xl">
              {dictionary.healing.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/72">
              {dictionary.healing.body}
            </p>
          </div>
          <div className="overflow-hidden rounded-bl-[6rem]">
            <Image
              src="/images/placeholders/healing.png"
              alt=""
              width={1000}
              height={750}
              className="aspect-[4/3] h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>
      <section className="bg-sage/20 py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {dictionary.healing.sections.map((section) => (
            <article className="border-t border-olive/30 pt-6" key={section.title}>
              <h2 className="font-serif text-3xl text-charcoal">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-charcoal/72">{section.body}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              {dictionary.healing.pricingTitle}
            </p>
            <p className="mt-4 font-serif text-6xl text-charcoal">{dictionary.common.price}</p>
            <p className="mt-2 text-charcoal/65">{dictionary.common.perSession}</p>
          </div>
          <BookingPanel
            title={dictionary.common.bookHealing}
            body={dictionary.healing.pricingBody}
            button={dictionary.common.openBooking}
            href={bookingLinks.healing}
          />
        </Container>
      </section>
    </>
  );
}
