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
    title: dictionary.seo.contactTitle,
    description: dictionary.contact.body,
    alternates: {
      canonical: `/${safeLocale}/contact`,
      languages: { el: "/el/contact", en: "/en/contact" },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "el");

  return (
    <>
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              {dictionary.common.brand}
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight text-charcoal sm:text-6xl">
              {dictionary.contact.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-charcoal/72">{dictionary.contact.body}</p>
          </div>
          <div className="mt-12">
            <BookingPanel
              title={dictionary.contact.discoveryTitle}
              body={dictionary.contact.discoveryBody}
              button={dictionary.common.bookDiscovery}
              href={bookingLinks.discovery}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
