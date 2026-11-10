window.REPOSITORY_DETAILS = {
  "mosaic-ucm": {
    name: "Mosaic UCM",
    kind: "Core system",
    standing: "Engineering candidate",
    tagline: "A portable substrate for computing whose rules, evidence, and authority travel with the work.",
    repoUrl: "https://github.com/AblemanMosaic/mosaic-ucm",
    does: "Mosaic UCM, the Universal Constitutional Machine, turns constitutional computing into a reference runtime and protocol family. It represents what must remain true, which variations are admissible, what evidence is required, and which authority must exist before a consequential effect can proceed.",
    useSteps: [
      "Begin with the common path and glossary to learn the system's operating grammar.",
      "Run the orientation command to inspect the available capabilities and current candidate state.",
      "Use the relevant protocol, qualification, custody, or agent-work path for the system you are governing."
    ],
    quickstart: "python tools/ucm.py orient\npython tools/ucm.py capabilities",
    why: "It makes the constitutional layer portable. Instead of adding policy after a system is built, the runtime carries obligations, evidence expectations, and effect boundaries through the build and execution path.",
    evidence: "The repository contains a working reference runtime and protocol family with scoped positive construction evidence for the current candidate.",
    boundaries: [
      "The operator adversarial apparatus is separate and is not represented as executed evidence here.",
      "A reference runtime does not by itself establish production readiness, institutional legitimacy, or complete coverage of every implementation surface."
    ],
    papers: [
      { relation: "Contextual connection", accession: "AC-0176", title: "Ableman Constitutional Governance", note: "Places the Universal Constitutional Machine within the broader candidate anatomy of constitutional governance." },
      { relation: "Contextual connection", accession: "AC-0084", title: "Constitutional Computing Architecture", note: "Supplies a system-level architectural frame for obligation-preserving computation." }
    ]
  },
  "ugk": {
    name: "UGK",
    kind: "Governance kernel",
    standing: "Tested reference implementation",
    tagline: "The effect waits until the receipt exists.",
    repoUrl: "https://github.com/AblemanMosaic/ugk",
    does: "UGK, the Universal Governance Kernel, is receipt-before-effect infrastructure for governed operations. An intent, warrant, and trace are evaluated for admissibility; an admitted operation receives a cryptographically chained receipt before execution, while an operation that cannot be receipted does not proceed.",
    useSteps: [
      "Install the dependency-light Python package.",
      "Create or select the charter that defines the operation's governing context.",
      "Submit operations through the kernel and retain their admission, refusal, and effect receipts."
    ],
    quickstart: "python -m pip install .\nugk explain LEGEND-S-01\nugk constitution",
    why: "It gives consequential software a small, inspectable checkpoint between a requested action and its effect. The checkpoint can refuse, explain, and preserve evidence instead of treating execution as its own justification.",
    evidence: "The repository reports 119 verification gates in its hardened verification configuration, standard-library-only operation, and chained receipt verification.",
    boundaries: [
      "UGK is not a complete policy engine, access-control product, or compliance certification.",
      "Receipt verification checks the record's integrity and chain. Establishing that an action completed requires the corresponding execution evidence.",
      "The reference signing backend is not constant-time; production signing requires a suitably hardened backend or external signer."
    ],
    papers: [
      { relation: "Implements", accession: "AC-0147", title: "Universal Governance Kernel (UGK)", note: "The paper specifies the governance-first execution architecture realized by this repository." },
      { relation: "Contextual connection", accession: "AC-0081", title: "Reasoning by Way of Receipts", note: "Explains why retained, scope-bound receipts can constrain what later reasoning is entitled to claim." }
    ]
  },
  "invariant-workbench": {
    name: "Invariant Workbench",
    kind: "Evidence workbench",
    standing: "Experimental local-first system",
    tagline: "Requirements become inspectable when every translation leaves a trail.",
    repoUrl: "https://github.com/AblemanMosaic/invariant-workbench",
    does: "Invariant Workbench connects readable requirements, restricted executable operations, arithmetic proofs, scenario execution, and bounded evidence. Its obligation ledger, courts, capability registry, diagnostics, and headless runner let a user inspect how a claim travels from requirement to result.",
    useSteps: [
      "Extract the repository to a short local path and run the verifier.",
      "Open the native Windows interface or use the headless commands.",
      "Trace an obligation from its readable statement through execution, evidence, and qualification."
    ],
    quickstart: "python -I -B ./VERIFY.py --directory .\npython -I -B ./tools/miw.py verify-dossier --directory ./evidence/qualification/demo",
    why: "It makes correspondence visible. A user can see whether a requirement, implementation, test, proof, and reported result actually refer to the same governed object rather than merely sharing a name.",
    evidence: "The package includes a local verifier, native Windows interface, headless runner, scenario machinery, obligation views, and bounded evidence surfaces.",
    boundaries: [
      "The system is information-only and grants no production or physical-operation authority.",
      "It does not prove arbitrary application correctness; some live database and native-window acceptance surfaces remain open."
    ],
    papers: [
      { relation: "Contextual connection", accession: "AC-0183", title: "Constitutional Synchronization", note: "Explains correspondence among meaning, model, realization, evidence, authority, and projection." },
      { relation: "Contextual connection", accession: "AC-0081", title: "Reasoning by Way of Receipts", note: "Provides the receipt discipline used to separate observation from warranted claim." },
      { relation: "Contextual connection", accession: "AC-0156", title: "The Three Hash Rule", note: "Provides an adjacent identity discipline for intent, state, and realization artifacts." }
    ]
  },
  "cmba-core": {
    name: "CMBA Core",
    kind: "Reference implementation",
    standing: "Research-preview candidate",
    tagline: "One object can have many dimensions without becoming many unrelated objects.",
    repoUrl: "https://github.com/AblemanMosaic/cmba-core",
    does: "CMBA Core is an experimental implementation of Cryptographic Multidimensional Binding Architecture. It commits typed state, descriptive dimensions, relationships, and interpretation profiles into recomputable roots, then exposes schemas, conformance vectors, replay receipts, and a versioned agent interface.",
    useSteps: [
      "Install the Python package and inspect the agent manifest and schemas.",
      "Create a typed request describing the state and dimensions to bind.",
      "Verify the resulting roots, receipts, and replay behavior against the supplied vectors."
    ],
    quickstart: "python -m pip install .\ncmba-agent manifest\ncmba-agent schema core",
    why: "It lets a system preserve several declared views of an object without pretending those views are interchangeable. The binding can be recomputed, inspected, and challenged rather than accepted as an opaque identifier.",
    evidence: "The research-preview line includes canonical JSON, domain-separated SHA-256 commitments, typed contracts, replay receipts, schemas, tests, and conformance vectors.",
    boundaries: [
      "A commitment proves consistency with the committed representation; it does not prove truth, legitimacy, or semantic completeness.",
      "Independent security review, production key custody, alternate-language implementations, and broader platform qualification remain outside the current evidence."
    ],
    papers: [
      { relation: "Contextual connection", accession: "AC-0092", title: "Constitutional Binding Theory", note: "Frames binding as governed reference whose identity, scope, and authority must be explicit." },
      { relation: "Contextual connection", accession: "AC-0059", title: "Meaning as Binding", note: "Develops the broader claim that semantic identity depends on preserved, inspectable relations." }
    ]
  },
  "semcrys-core": {
    name: "SemCrys Core",
    kind: "Semantic infrastructure",
    standing: "Public release line",
    tagline: "Repeated meaning should not have to pay rent in full every time.",
    repoUrl: "https://github.com/AblemanMosaic/semcrys-core",
    does: "SemCrys Core provides lossless compression and integerized semantic references through reusable legends, group legends, recursive metalegends, and explicit bindings. It can package, list, verify, and reconstruct related material without depending on a remote service.",
    useSteps: [
      "Run the CLI on a file or related collection to build a package.",
      "Inspect its legends and verify exact reconstruction before relying on it.",
      "Reuse stable legends across related documents, code, JSON, or logs when the material benefits from shared structure."
    ],
    quickstartNote: "Install the CLI or extract a standalone release. From a folder containing report.txt, package it, verify it, and restore its contents:",
    quickstart: "semcrys report.txt -o report.crys\nsemcrys verify report.crys\nsemcrys unpack report.crys restored",
    why: "It can reduce repeated storage and transmission where measured savings exceed the cost of the shared legends. Compact references retain an exact reconstruction path; reducing an AI model's context usage additionally requires a compatible consumer and tokenizer.",
    evidence: "The repository supplies offline Windows and Linux tools and a pinned warm-legend fixture that reports smaller output than XZ-6 and BZ2-9 for that exact test subject.",
    boundaries: [
      "The compression result is fixture-bound, not a universal performance claim.",
      "Already compressed or encrypted material is a poor fit, and exact reconstruction does not itself prove that a semantic interpretation is correct."
    ],
    papers: [
      { relation: "Related research", accession: "AC-0120", title: "SemCrys: Toward a Tokenizer-Native Semantic Substrate for Machine Cognition", note: "Explores the broader substrate proposal. This repository realizes reusable legends, integer references, compression, bindings, and exact reconstruction." },
      { relation: "Related research", accession: "AC-0119", title: "SemCrys0", note: "Describes a minimal session-local legend protocol related to the explicit compact references used here." },
      { relation: "Contextual connection", accession: "AC-0121", title: "SemCrys-Secure", note: "Explores authorization-scoped transport and interpretation beyond the present compression core." }
    ]
  },
  "csofta-canonical": {
    name: "CSoftA Canonical",
    kind: "Analysis corpus",
    standing: "Reproducible public corpus",
    tagline: "Software has a constitution whether or not anyone wrote it down.",
    repoUrl: "https://github.com/AblemanMosaic/CSoftA-Canonical",
    does: "CSoftA, Constitutional Software Analysis, examines governance in production software systems. Active checks can prevent an operation from completing. Crystallized checks run alongside it without controlling completion. Absent means the operation family has no represented governance mechanism. Each analysis packages those classifications with a formal model, findings, gates, and a reproducible fingerprint.",
    useSteps: [
      "Clone the corpus and run the governed test harness.",
      "Open an individual system package to inspect its model, gate suite, and findings.",
      "Compare operation families across systems without collapsing governance posture into a single quality score."
    ],
    quickstart: "python governed_pytest.py",
    why: "It makes constitutional structure comparable across ordinary software. Readers can examine whether a governance check controls completion, merely accompanies the operation, or is absent, and compare the resulting gaps across systems.",
    evidence: "The current corpus reports 80 analyzed systems and 722 executable gates, with a repository-wide verification path.",
    boundaries: [
      "The classifications describe governance architecture, not overall security, reliability, ethics, or product quality.",
      "Classifications apply to operation families and declared configurations; one system can contain several different governance states."
    ],
    papers: [
      { relation: "Implements", accession: "AC-0126", title: "Constitutional Software Analysis (CSoftA): A Governance-Based Classification Method for Software Systems", note: "The paper defines the classification method instantiated across the repository's system analyses." }
    ]
  },
  "cbmd-open-research": {
    name: "CBMD Open Research",
    kind: "Open research",
    standing: "Public provisional mathematics",
    tagline: "A promising pattern is the beginning of a proof obligation.",
    repoUrl: "https://github.com/AblemanMosaic/cbmd-open-research",
    does: "Constraint-Bound Mathematical Discovery (CBMD) packages provisional mathematical claims for verification, correction, or disproof. Each discovery separates the claim, argument, explorer, verification evidence, review record, and revisions so that discovery does not masquerade as settled proof.",
    useSteps: [
      "Run the dependency-free repository qualification check.",
      "Choose a discovery dossier and inspect its claim boundary before its supporting argument.",
      "Replay the exact evaluator or pinned proof tooling, then report confirmation, counterexample, or unresolved dependency."
    ],
    quickstart: "python -B tools/qualify_repository.py --repository-only",
    why: "It turns mathematical exploration into a reviewable research object. Failed approaches, counterexamples, dependency gaps, and proof obligations remain visible instead of disappearing behind a polished conclusion.",
    evidence: "The repository reports 19 governed dossiers: 12 review-ready and 7 still qualifying, with exact evaluators and selected Lean and GAP replay paths.",
    boundaries: [
      "The material is provisional and explicitly invites correction or disproof.",
      "A passing repository check verifies package integrity and declared evidence; it does not establish novelty or universal mathematical truth."
    ],
    papers: [
      { relation: "Contextual connection", accession: "AC-0007", title: "Constraint-Bound Inference and Invariant Extraction", note: "Supplies the adjacent method of learning from admissible continuation, collapse points, and candidate invariants." }
    ]
  },
  "bak-ucm-case-study": {
    name: "BAK UCM Case Study",
    kind: "Governed case study",
    standing: "Bounded worked example",
    tagline: "The bug was hiding in the state transition, not in the story anyone told about it.",
    repoUrl: "https://github.com/AblemanMosaic/bak-ucm-case-study",
    does: "This repository constitutionalizes a bounded analysis of Betrayal at Krondor as a model-realization system. It combines a read-only save inspector, deterministic synthetic corpus, controlled transition harness, and historical-versus-counterfactual experiment to test one source-bound behavioral defect.",
    useSteps: [
      "Install the case-study package and verify the synthetic corpus.",
      "Fetch the exact upstream reconstructed source named by the custody record.",
      "Run the unit and counterfactual tests to compare historical behavior with the proposed correction."
    ],
    quickstart: "python -m pip install -e .\nbak-oracle corpus-verify corpus/MANIFEST.json --pretty\nbak-oracle inspect corpus/valid-minimal.gam --pretty",
    why: "It shows what governed debugging looks like when the claim is narrower than the software. The case study preserves exact source custody, distinguishes observed behavior from inference, and keeps unanswered reachability questions open.",
    evidence: "In one reconstructed game function, a tied random draw can leave the previous result in place. The test harness reproduces that behavior and compares it with a correction.",
    boundaries: [
      "The case study does not redistribute or replace the reconstructed source project.",
      "It does not establish shipped-dialogue reachability, original DOS execution, player-visible impact, or absence of other defects."
    ],
    papers: [
      { relation: "Demonstrates", accession: "AC-0004", title: "Governed Coding and Debugging", note: "Applies its claim-governance discipline to a concrete source-bound debugging investigation." }
    ]
  },
  "leap42": {
    name: "Leap42",
    kind: "Independent system",
    standing: "Reference library",
    tagline: "A year can be made more regular without pretending the sky is.",
    repoUrl: "https://github.com/AblemanMosaic/Leap42",
    does: "Leap42 is the Python reference library for a ten-month calendar with nine 36-day months and a final month of 41 or 42 days. Its decimal clock divides each day into 10 hours, each hour into 100 minutes, and each minute into 100 seconds.",
    useSteps: [
      "Install the package or copy the single-file reference implementation.",
      "Declare the civil epoch that binds Leap42 dates to an external calendar.",
      "Use the conversion, arithmetic, present-time, and formatting functions in applications or experiments."
    ],
    quickstartNote: "Install the library, then convert May 26, 2026 using the December 1969 solstice as the example epoch:",
    quickstart: "python -m pip install leap42\npython -c \"import leap42 as L; print(L.gregorian_to_l42(2026, 5, 26, L.dec_solstice_jdn(1969)))\"",
    why: "It makes the calendar proposal executable. The library separates the calendar's regular internal geometry from the external epoch choice needed to connect it to civil time.",
    evidence: "The repository provides an epoch-agnostic, standard-library-only Python implementation with date conversion, arithmetic, and decimal-time functions.",
    boundaries: [
      "The library is a reference implementation, not a civil-adoption standard or astronomical authority.",
      "Conversion results depend on the epoch selected by the caller."
    ],
    papers: [
      { relation: "Implements", accession: "AC-0124", title: "The Leap 42 Calendar", note: "The paper specifies the calendar and timekeeping architecture implemented by this library." }
    ]
  }
};
