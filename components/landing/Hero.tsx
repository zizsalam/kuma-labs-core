import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-kuma-bg pt-3xl pb-2xl">
      <div className="max-w-3xl mx-auto px-md text-center">
        <Image
          src="/logo/kuma-wordmark.svg"
          alt="Kuma Labs"
          width={160}
          height={32}
          className="mx-auto mb-2xl"
          priority
        />
        <h1 className="text-display font-semibold leading-[1.1] text-kuma-text-primary">
          Merchants talk. Your app receives validated JSON.
        </h1>
        <p className="mt-md text-body text-kuma-text-secondary leading-6">
          One API call turns spoken Wolof or French into structured merchant-transaction data.
        </p>
        <p className="mt-sm text-body text-kuma-text-muted leading-6">
          For financial apps serving informal merchants.
        </p>
        <div className="mt-xl flex gap-md justify-center flex-wrap">
          <a
            href="/demos"
            className="bg-kuma-accent text-kuma-text-primary px-lg py-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
          >
            Try a live demo →
          </a>
          <a
            href="https://docs.kuma-labs.com"
            className="border border-kuma-border text-kuma-text-primary px-lg py-sm font-semibold rounded-md hover:border-kuma-border-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}
