export function WhoItsForSection() {
  return (
    <section className="bg-paper-bg" style={{ padding: "5.5rem 0" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 680px) minmax(0, 240px)",
            gap: "4rem",
            alignItems: "start",
          }}
          className="who-grid-responsive"
        >
          <style>{`
            @media (max-width: 1000px) {
              .who-grid-responsive {
                grid-template-columns: 1fr !important;
                gap: 2.5rem !important;
              }
              .who-margin-note {
                position: static !important;
                margin-top: 1rem !important;
                border-left: 2px solid #1D9E75 !important;
                max-width: 520px !important;
              }
            }
          `}</style>

          {/* Main column */}
          <div>
            <h2
              className="font-serif text-paper-ink tracking-[-0.015em] mb-[1.8rem]"
              style={{ fontSize: "clamp(2.1rem, 3.9vw, 3.3rem)", lineHeight: "1.08", maxWidth: "22ch" }}
            >
              Who Kuma is for.
            </h2>
            <p className="font-serif text-paper-ink" style={{ lineHeight: "1.6", marginBottom: "1.1em" }}>
              Operators where field-staff throughput is capped by typing, not by
              talking. Mobile-money cash-in/cash-out agents. Merchant-banking
              field reps logging dozens of transactions a shift. Agri-extension
              workers across thousands of smallholders. High-volume merchant
              platforms where the top decile of users does 30+ transactions a
              day.
            </p>
            <p className="font-serif text-paper-ink" style={{ lineHeight: "1.6", marginBottom: "1.1em" }}>
              Operators it doesn&apos;t fit, just as plainly:
              relationship-banking ops where a loan officer knows their twenty
              borrowers personally, ten customers share a phone, and the database
              is a notebook. We learned this expensively. If your operation runs
              on cheap local labor and personal trust at small scale, voice infra
              is solving a problem you don&apos;t have.
            </p>
          </div>

          {/* Margin note */}
          <aside
            className="who-margin-note font-mono text-[0.82rem] leading-[1.65]"
            style={{
              color: "rgba(26,26,26,0.62)",
              borderLeft: "1px solid rgba(26,26,26,0.12)",
              paddingLeft: "1.2rem",
              position: "sticky",
              top: "5rem",
              marginTop: "4.5rem",
            }}
          >
            <span
              className="block font-mono text-[0.68rem] tracking-[0.06em] uppercase mb-[0.6rem]"
              style={{ color: "rgba(26,26,26,0.40)" }}
            >
              Field note · Mar 2026
            </span>
            We pitched two relationship-banking MFIs in Q1. Both polite
            no&apos;s. The model that works for them is a notebook and a
            memorised customer list — voice infra solves the wrong problem. Six
            weeks to learn that.
          </aside>
        </div>
      </div>
    </section>
  );
}
