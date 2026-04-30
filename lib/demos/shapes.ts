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
        wolof: "Dëgg ci jënd bi ma def ci Ousmane",
        gloss: "Cancel the transfer I made to Ousmane",
        audioUrl: "",
        caption: "From Abdul's Wave pitch — April 2026",
      },
      {
        wolof: "Yónne junni franc ci Aminata",
        gloss: "Send 1000 francs to Aminata",
        audioUrl: "",
      },
      {
        wolof: "Wuyu transfert bu mu génn",
        gloss: "Repeat the last transfer",
        audioUrl: "",
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
        wolof: "Cheikh fey na, ñaar junni",
        gloss: "Cheikh paid, 2000",
        audioUrl: "",
      },
      {
        wolof: "Awa wax na suba bi mu fey",
        gloss: "Awa said she'll pay tomorrow",
        audioUrl: "",
      },
      {
        wolof: "Moussa téppul telephon bi",
        gloss: "Moussa didn't pick up the phone",
        audioUrl: "",
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
        wolof: "Awa jënd na ñaar junni",
        gloss: "Awa bought 2000",
        audioUrl: "",
      },
      {
        wolof: "Fatou jay na juróom benn téeméer crédit",
        gloss: "Fatou sold 600 on credit",
        audioUrl: "",
      },
      {
        wolof: "Moussa j'ai vendu ñett junni",
        gloss: "Moussa I sold 3000 (FR+Wolof)",
        audioUrl: "",
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
        wolof: "Damay yónne juróom téeméer franc ci cycle bi",
        gloss: "I'm sending 500 francs for this cycle",
        audioUrl: "",
      },
      {
        wolof: "Mbey nañu Talibé fan bu njëkk",
        gloss: "Deliver to Talibé first slot",
        audioUrl: "",
      },
      {
        wolof: "Sama gerté dafa yàgg, defal ko gàllàg",
        gloss: "My peanuts are late, register them for storage",
        audioUrl: "",
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
        wolof: "Sama tur Abdoulaziz Kane, juddu naa 1995, sama CNI: 1234567890123",
        gloss: "My name is Abdoulaziz Kane, born 1995, CNI: 1234567890123",
        audioUrl: "",
      },
      {
        wolof: "Aminata Diop, mille neuf cent quatre-vingt-douze, CNI 9876543210987",
        gloss: "Aminata Diop, 1992, CNI 9876543210987",
        audioUrl: "",
      },
      {
        wolof: "Cheikh Sarr, juddu naa 1988, CNI 5555111122223333",
        gloss: "Cheikh Sarr, born 1988, CNI 5555111122223333",
        audioUrl: "",
      },
    ],
  },
};
