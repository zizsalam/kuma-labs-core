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
        wolof: "Dindil yónnee bi ma def ci Ousmane",
        gloss: "Cancel the transfer I made to Ousmane",
        audioUrl: "/demos/audio/remittance-dispatch/example-1.m4a",
      },
      {
        wolof: "Yónneel Aminata junni",
        gloss: "Send Aminata 5000",
        audioUrl: "/demos/audio/remittance-dispatch/example-2.m4a",
      },
      {
        wolof: "Bamtuwatal yónnee bi mujj",
        gloss: "Repeat the last transfer",
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
        wolof: "Fatou jaay na juróom-benni téeméer bor",
        gloss: "Fatou sold 3000 on credit",
        audioUrl: "/demos/audio/bnpl-collections/example-1.m4a",
      },
      {
        wolof: "Moussa, jaay naa ñetti junni",
        gloss: "Moussa, I sold 3000",
        audioUrl: "/demos/audio/bnpl-collections/example-2.m4a",
      },
      // TODO: confirm 3rd BNPL collection utterance with Abdul
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
        wolof: "Cheikh fey na ñaari junni",
        gloss: "Cheikh paid 2000",
        audioUrl: "/demos/audio/merchant-sales/example-1.m4a",
      },
      {
        wolof: "Awa wax na ne dina fey suba",
        gloss: "Awa said she'll pay tomorrow",
        audioUrl: "/demos/audio/merchant-sales/example-2.m4a",
      },
      {
        wolof: "Moussa wuyuul téléphon bi",
        gloss: "Moussa didn't answer the phone",
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
        wolof: "Damay yónne juróom-téeméer ci cycle bi",
        gloss: "I'm sending 500 for this cycle",
        audioUrl: "/demos/audio/agri-coordination/example-1.m4a",
      },
      {
        wolof: "Sama gerté dafa yeex, dencal ma ko",
        gloss: "My peanuts are late, store them for me",
        audioUrl: "/demos/audio/agri-coordination/example-2.m4a",
      },
      // TODO: confirm 3rd agri-coordination utterance with Abdul
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
        wolof: "Sama tur Abdoul Aziz Kane, juddu naa ci 1995, sama CNI : 1234567890123",
        gloss: "My name is Abdoul Aziz Kane, born 1995, CNI: 1234567890123",
        audioUrl: "/demos/audio/kyc-onboarding/example-1.m4a",
      },
      {
        wolof: "Aminata Diop, juddu ci 1992, CNI : 9876543210987",
        gloss: "Aminata Diop, born 1992, CNI: 9876543210987",
        audioUrl: "/demos/audio/kyc-onboarding/example-2.m4a",
      },
      {
        wolof: "Cheikh Sarr, juddu naa ci 1988, CNI : 5555111122223333",
        gloss: "Cheikh Sarr, born 1988, CNI: 5555111122223333",
        audioUrl: "/demos/audio/kyc-onboarding/example-3.m4a",
      },
    ],
  },
};
