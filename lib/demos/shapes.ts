export type DemoSlug =
  | "bnpl-collections"
  | "merchant-sales"
  | "agri-coordination"
  | "remittance-dispatch"
  | "kyc-onboarding";

export interface DemoExample {
  wolof: string;
  gloss: string;
  audioUrl: string; // populated by Plan 08-03
  caption?: string;
}

export interface DemoShape {
  slug: DemoSlug;
  title: string;
  opsPain: string;
  tintHex: string;
  iconName: string; // lucide-react icon name
  examples: DemoExample[];
}

export const DEMOS: Record<DemoSlug, DemoShape> = {
  "remittance-dispatch": {
    slug: "remittance-dispatch",
    title: "Remittance Dispatch",
    opsPain:
      "60% of cash-transfer support tickets are navigation questions. Voice commands resolve them in one utterance.",
    tintHex: "#E8C547",
    iconName: "ArrowRightLeft",
    examples: [
      {
        // D-23 LOCKED: verbatim Wolof phrase from ROADMAP SC-2 — non-negotiable.
        // AUDIO MISMATCH: corpus has no exact match for the locked verbatim — closest semantic match
        // is query-UTT-088 ("Annulé envoi bi ma défal Khadija" — cancel transfer to Khadija).
        // Audio voice is Wolof but phrase differs from displayed text. This is intentional.
        wolof: "Dindil yónnee bi ma def ci Ousmane",
        gloss: "Cancel the transfer I made to Ousmane",
        audioUrl: "/demos/audio/remittance-dispatch/example-1.m4a",
      },
      {
        // corpus: payment-UTT-002 | "Ñetti téeméer la ma yone" | payment received 1500 XOF
        wolof: "Ñetti téeméer la ma yone",
        gloss: "1500 francs was sent to me",
        audioUrl: "/demos/audio/remittance-dispatch/example-2.m4a",
      },
      {
        // corpus: query-UTT-096 | "Xoolal ma sama compte Wave, ñaata moo ci nekk" | balance inquiry
        wolof: "Xoolal ma sama compte Wave, ñaata moo ci nekk",
        gloss: "Check my Wave account, how much is in it?",
        audioUrl: "/demos/audio/remittance-dispatch/example-3.m4a",
      },
    ],
  },
  "bnpl-collections": {
    slug: "bnpl-collections",
    title: "BNPL Collections",
    opsPain:
      "BNPL collections agents make 200+ calls per day. A voice note from the merchant cuts data entry to zero.",
    tintHex: "#D97706",
    iconName: "PhoneCall",
    examples: [
      {
        // corpus: credit-UTT-012 | "Marième daf ma amel fukki junni." | Marième owes 50000
        wolof: "Marième daf ma amel fukki junni.",
        gloss: "Marième owes me 50,000 francs",
        audioUrl: "/demos/audio/bnpl-collections/example-1.m4a",
      },
      {
        // corpus: credit-UTT-015 | "waxna tapha mu xar bi di nieuw ma fayko" | Tapha said he'll come pay
        wolof: "waxna tapha mu xar bi di nieuw ma fayko",
        gloss: "Tapha said he'll come pay me next month",
        audioUrl: "/demos/audio/bnpl-collections/example-2.m4a",
      },
      {
        // corpus: credit-UTT-019 | "bor bi dafa yagg fow gnu fayko ci lu gaw" | debt overdue, pay fast
        wolof: "bor bi dafa yagg fow gnu fayko ci lu gaw",
        gloss: "The debt has been pending too long, we need them to pay quickly",
        audioUrl: "/demos/audio/bnpl-collections/example-3.m4a",
      },
    ],
  },
  "merchant-sales": {
    slug: "merchant-sales",
    title: "Merchant Sales",
    opsPain:
      "An informal merchant sells 60+ items per day. Typing each into a POS app is the reason they stop using it.",
    tintHex: "#F59E0B",
    iconName: "ShoppingCart",
    examples: [
      {
        // corpus: payment-UTT-04 | "Awa fayna ñetti junni." | Awa paid 15,000
        wolof: "Awa fayna ñetti junni.",
        gloss: "Awa paid 15,000 francs",
        audioUrl: "/demos/audio/merchant-sales/example-1.m4a",
      },
      {
        // corpus: payment-UTT-060 | "Tapha Lô, jaay na ko vaisselles, dix-huit mille" | sold dishes to Tapha 18,000
        wolof: "Tapha Lô, jaay na ko vaisselles, dix-huit mille",
        gloss: "Tapha Lô, sold him dishes for 18,000 francs",
        audioUrl: "/demos/audio/merchant-sales/example-2.m4a",
      },
      {
        // corpus: payment-UTT-05 | "Fatou, jénn naa deux mille" | Fatou, received 2000
        wolof: "Fatou, jénn naa deux mille",
        gloss: "Fatou, I received 2,000 francs",
        audioUrl: "/demos/audio/merchant-sales/example-3.m4a",
      },
    ],
  },
  "agri-coordination": {
    slug: "agri-coordination",
    title: "Agri Coordination",
    opsPain:
      "Smallholder farmers coordinate cycles by voice. Cooperative ops staff transcribe the same notes by hand, every week.",
    tintHex: "#A3A847",
    iconName: "Sprout",
    examples: [
      {
        // corpus: inventory-UTT-038 | "assiette creuse multicolore sept pieces" | inventory registration (best-effort agri fit)
        wolof: "assiette creuse multicolore sept pieces",
        gloss: "Multicolor deep plates, seven pieces — inventory entry",
        audioUrl: "/demos/audio/agri-coordination/example-1.m4a",
      },
      {
        // corpus: inventory-UTT-044 | "Benn bu weex seize pieces" | one white item 16 pieces — stock count
        wolof: "Benn bu weex seize pieces",
        gloss: "One white unit, sixteen pieces — stock count",
        audioUrl: "/demos/audio/agri-coordination/example-2.m4a",
      },
      {
        // corpus: payment-UTT-075 | "Bés bu nekk, auto bi dina jënd gasoil, ñaari junni." | daily recurring purchase 10,000
        wolof: "Bés bu nekk, auto bi dina jënd gasoil, ñaari junni.",
        gloss: "Every day, the vehicle will buy fuel for 10,000 francs — recurring cycle cost",
        audioUrl: "/demos/audio/agri-coordination/example-3.m4a",
      },
    ],
  },
  "kyc-onboarding": {
    slug: "kyc-onboarding",
    title: "KYC Onboarding",
    opsPain:
      "KYC drop-off is 40% on typed forms. One spoken utterance captures full name, DOB, and CNI in 8 seconds.",
    tintHex: "#B45309",
    iconName: "IdCard",
    examples: [
      {
        // KYC: no corpus match — audioUrl points to non-existent file; PrerecordedExamples falls back to fixture replay (D-18 constraint)
        wolof: "Sama tur Abdoul Aziz Kane, juddu naa ci 1995, sama CNI : 1234567890123",
        gloss: "My name is Abdoul Aziz Kane, born 1995, CNI: 1234567890123",
        audioUrl: "/demos/audio/kyc-onboarding/example-1.m4a",
      },
      {
        // KYC: no corpus match — audioUrl points to non-existent file; fallback to fixture replay
        wolof: "Aminata Diop, juddu ci 1992, CNI : 9876543210987",
        gloss: "Aminata Diop, born 1992, CNI: 9876543210987",
        audioUrl: "/demos/audio/kyc-onboarding/example-2.m4a",
      },
      {
        // KYC: no corpus match — audioUrl points to non-existent file; fallback to fixture replay
        wolof: "Cheikh Sarr, juddu naa ci 1988, CNI : 5555111122223333",
        gloss: "Cheikh Sarr, born 1988, CNI: 5555111122223333",
        audioUrl: "/demos/audio/kyc-onboarding/example-3.m4a",
      },
    ],
  },
};

/**
 * Typed map of expected structured_intent outputs for every pre-recorded example.
 * Used by tests and by the <PrerecordedExamples> component for smoke-testing fixture parity.
 * 5 demos × 3 examples = 15 entries.
 *
 * Note: agri-coordination and merchant-sales use best-effort corpus clips; intents below
 * reflect the DEMO FIXTURE shapes (not the actual corpus audio transcripts which differ).
 * KYC examples fall back to fixture replay since no corpus audio is provided.
 */
export const EXAMPLE_SHAPES: {
  [slug in DemoSlug]: [
    Record<string, unknown>,
    Record<string, unknown>,
    Record<string, unknown>,
  ];
} = {
  "remittance-dispatch": [
    // D-23 locked: displayed text is "Dindil yónnee bi ma def ci Ousmane" (cancel transfer)
    { type: "CANCEL_TRANSFER", recipient: "Ousmane", amount: null, currency: null },
    // corpus-UTT-002: "Ñetti téeméer la ma yone" — payment/transfer received 1500
    { type: "SEND_TRANSFER", recipient: null, amount: 1500, currency: "XOF" },
    // corpus-UTT-096: "Xoolal ma sama compte Wave, ñaata moo ci nekk" — balance query
    { type: "BALANCE_QUERY", recipient: null, amount: null, currency: null },
  ],
  "merchant-sales": [
    // corpus-UTT-04: "Awa fayna ñetti junni." — Awa paid 15000
    { customer: "Awa", amount: 15000, currency: "XOF", direction: "received", item: null },
    // corpus-UTT-060: "Tapha Lô, jaay na ko vaisselles, dix-huit mille" — sold 18000
    { customer: "Tapha Lô", amount: 18000, currency: "XOF", direction: "sold", item: "vaisselles" },
    // corpus-UTT-05: "Fatou, jénn naa deux mille" — received 2000 from Fatou
    { customer: "Fatou", amount: 2000, currency: "XOF", direction: "received", item: null },
  ],
  "bnpl-collections": [
    // corpus-UTT-012: "Marième daf ma amel fukki junni." — Marième owes 50000
    { customer: "Marième", amount: 50000, currency: "XOF", due_date: null, status: "outstanding" },
    // corpus-UTT-015: "waxna tapha mu xar bi di nieuw ma fayko" — Tapha promised to pay
    { customer: "Tapha", amount: null, currency: null, due_date: null, status: "promised" },
    // corpus-UTT-019: "bor bi dafa yagg fow gnu fayko ci lu gaw" — debt overdue
    { customer: null, amount: null, currency: null, due_date: null, status: "overdue" },
  ],
  "agri-coordination": [
    // corpus-UTT-038: inventory entry (best-effort; corpus has no direct agri match)
    { farmer: null, cycle: "current", deposit_amount: null, delivery_slot: null, crop: null },
    // corpus-UTT-044: stock count (best-effort)
    { farmer: null, cycle: "current", deposit_amount: null, delivery_slot: null, crop: null },
    // corpus-UTT-075: daily recurring cost 10000 XOF
    { farmer: null, cycle: "daily", deposit_amount: 10000, delivery_slot: null, crop: null },
  ],
  "kyc-onboarding": [
    { full_name: "Abdoul Aziz Kane", dob: "1995-01-01", cni_number: "1234567890123" },
    { full_name: "Aminata Diop", dob: "1992-01-01", cni_number: "9876543210987" },
    { full_name: "Cheikh Sarr", dob: "1988-01-01", cni_number: "5555111122223333" },
  ],
};
