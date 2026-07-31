# Repository Guidelines

## Project Structure & Module Organization

This repository implements a 7Cs-to-Spec Kit documentation pipeline.

- `resources/`: original delivery PDFs; treat as immutable source material.
- `evidence/`: rendered page images used for visual verification.
- `com/`: Canvas Object Models (JSON), one file per in-scope canvas.
- `mapping/`: canvas-specific Markdown mappings.
- `composed/`: assembled Spec Kit prompts and the trace annex.
- `audit/`: audit reports, clarify/checklist inputs, and machine-readable results.
- `scripts/`: deterministic ESM utilities for composition and auditing.
- `.agents/skills/`: workflow rules for each 7Cs and Spec Kit stage.
- `.specify/`: Spec Kit templates, workflows, and helper scripts.

Use delivery-prefixed names such as `E1-functional-p9.json`, `E1-deployment.md`, and stable post-it IDs such as `E1-F9-J-01`.

## Build, Test, and Development Commands

There is no application build or package manager configuration. Run the pipeline directly with Node:

```bash
node scripts/compose-e1.mjs
node scripts/audit-e1.mjs
```

The first command regenerates `composed/` from validated mappings. The second independently recounts COM post-its, checks C/A/T/V metrics, runs the missing-trace sanity test, and writes `audit/`.

Useful checks:

```bash
jq . com/E1-functional-p9.json
rg -c '^\| E1-' composed/E1-trace-annex.md
```

## Coding Style & Naming Conventions

JavaScript files use ESM (`.mjs`), two-space indentation, semicolons, `const` by default, and descriptive camelCase names. Keep scripts deterministic and fail loudly on missing headings, duplicate IDs, or count mismatches. Preserve literal canvas text—including original spelling—in COMs and trace annexes. Use `[NEEDS CLARIFICATION]` instead of inventing schemas, permissions, frequencies, or metrics.

## Testing Guidelines

The audit script is the primary test suite. Before submitting changes, require:

- coverage `C = 1.00`;
- technical contamination `T = 0`;
- one trace row per COM post-it;
- the sanity test to reject an intentionally omitted trace.

Also verify generated diffs and ensure `/speckit.plan` remains gated until clarifications are resolved.

## Commit & Pull Request Guidelines

No Git metadata is present, so no historical convention can be inferred. Use concise imperative commits, for example `docs(mapping): add E1 deployment traces`. Pull requests should identify the delivery, changed pipeline stages, commands run, metric results, and any unresolved bundle or trace inconsistencies. Include screenshots only when evidence rendering changes.
