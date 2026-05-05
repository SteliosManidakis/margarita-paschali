import { Button } from "@/components/ui/Button";

export function BookingPanel({
  title,
  body,
  button,
  href,
}: {
  title: string;
  body: string;
  button: string;
  href: string;
}) {
  return (
    <div className="bg-clay/20 px-6 py-8 sm:px-10 sm:py-10">
      <h2 className="font-serif text-4xl text-charcoal">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/72">{body}</p>
      <div className="mt-6">
        <Button href={href} external>
          {button}
        </Button>
      </div>
    </div>
  );
}
