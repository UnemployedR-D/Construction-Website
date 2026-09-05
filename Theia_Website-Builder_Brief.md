# Theia Website-Builder Brief

## Purpose

Build a polished marketing website for **Theia**, a construction physical-operations orchestration product.

The website should make one idea immediately clear:

> **The schedule says what should happen. Theia helps the field decide what can happen next—and which crew should do it.**

Theia is not another project-management dashboard, schedule viewer, or generic AI copilot. It is an operational decision layer for specialty contractors, beginning with electrical contractors and expanding to mechanical, HVAC, plumbing, concrete, and other self-performing trades.

Use confident but precise language. Describe current functionality as a product direction unless explicitly marked as available. Do not make unsupported claims about competitor revenue, market share, customer counts, accuracy, time savings, or ROI.

---

## Recommended homepage positioning

### Eyebrow

**Physical operations orchestration for construction trades**

### Hero headline

**Turn blocked work into the next executable move.**

### Hero subheadline

Theia connects your work packages, constraints, materials, areas, equipment, and crews to answer the question that matters every morning:

> **What can we actually build next, and who is best positioned to build it?**

### Primary CTA

**See Theia in action**

### Secondary CTA

**Explore the operating model**

### Hero visual direction

Show a live operational board, not a generic Gantt chart. The visual should contain:

- Work packages grouped by area or zone.
- Readiness indicators: ready, blocked, at risk, or needs confirmation.
- Constraint chips such as `RFI open`, `material not staged`, `inspection pending`, `predecessor incomplete`, and `lift unavailable`.
- Crew cards showing trade, availability, capability, current assignment, and next available time.
- A recommended move with **Approve**, **Modify**, and **Escalate** actions.

The interface should feel like a calm control surface for a general foreman—not an AI chatbot and not an office-only planning tool.

---

## What Theia is

Theia is a decision and coordination layer that sits above the systems construction teams already use.

It builds a current view of:

- The work that needs to happen.
- The work that is actually executable now or on the next shift.
- The constraints preventing planned work.
- The crews, people, tools, equipment, and materials available to act.
- The likely effect of each possible intervention.
- What happened after a decision was approved.

Theia turns fragmented operational information into a human-approved action loop:

```text
Plan → observe → detect change → assess readiness → generate options
→ recommend next move → approve or modify → communicate assignment
→ observe result → compare expected vs. actual → improve
```

The initial product should be recommendation-first. A superintendent, general foreman, or project manager remains accountable for the decision.

### Theia in one sentence

**Theia helps specialty contractors convert changing field conditions into executable crew decisions.**

### Theia is not

- A replacement for P6, Microsoft Project, Procore, Autodesk Construction Cloud, ERP, or timekeeping.
- A promise of fully autonomous construction.
- A computer-vision product by itself.
- A labor roster without work context.
- A schedule optimizer that only rearranges activities on paper.

---

## The initial product: Theia for Trades

The first product should be built for large self-performing specialty contractors—starting with electrical contractors that manage multiple projects, crews, work areas, and dependencies at once.

### Primary user

The daily user is the person who has to make the plan executable:

- General foreman.
- Area or project superintendent.
- Trade operations manager.
- Project manager when a field decision affects milestones, labor, or cost.

### Core job to be done

Every day, Theia should help the trade answer:

1. What was planned?
2. What is no longer executable?
3. What other work is ready?
4. Which crew or equipment can perform it?
5. What is the best intervention given schedule, productivity, cost, and practical constraints?
6. Who needs to approve, know, or act?

### Initial workflow

#### 1. Bring in the plan

Import or connect to the contractor’s existing schedule, work breakdown, lookahead, work packages, and project information.

Target integrations may include P6, Microsoft Project, Procore, Autodesk Construction Cloud, ERP, timekeeping, material systems, and workforce records. Present these as integration targets unless they are already live.

#### 2. Model executable work

Represent work at the level a trade actually manages it:

- Project.
- Building, level, area, or zone.
- System or scope.
- Work package.
- Crew requirement.
- Predecessor and handoff.
- Required drawing, material, equipment, access, inspection, and approval state.

#### 3. Maintain readiness

Each work package receives a living readiness state:

- **Ready** — the known prerequisites are satisfied.
- **Blocked** — a specific constraint prevents execution.
- **At risk** — the work may become blocked or miss its commitment.
- **Needs confirmation** — the system lacks enough current information.
- **Complete** — field confirmation has been recorded.

Every status should show its evidence and owner. Avoid presenting inferred state as fact.

#### 4. Match work to crews

Theia compares executable work with available resources:

- Crew and foreman availability.
- Trade and task capability.
- Certifications or equipment qualifications.
- Current location and assignment.
- Shift and calendar.
- Crew size and composition.
- Tools, lifts, test equipment, and other required assets.
- Historical production performance, where enough data exists.

#### 5. Recommend the next move

When the original plan is infeasible, Theia can present options such as:

- Move a crew to another ready area.
- Split or combine a work package.
- Resequence work within the same area.
- Reallocate a lift, tool, or test instrument.
- Escalate an RFI, material, access, or inspection constraint.
- Keep a crew in place and protect a milestone.
- Request a change from the GC or another trade.

Each recommendation should explain the reason, assumptions, affected commitments, and unresolved uncertainty.

#### 6. Approve and communicate

The responsible leader approves or modifies the recommendation. Theia then creates a clear action record for the foreman, crew, project team, and affected partner.

#### 7. Learn from execution

Capture the decision, the expected outcome, the actual result, and the reason for variance. This becomes the foundation for better production-rate estimates, constraint detection, and future recommendations.

---

## Future product: Theia for GCs

The GC product should come later, after Theia has earned trust inside a trade organization.

The GC view is not a duplicate of the subcontractor workspace. It is a cross-project and cross-trade coordination layer.

### What the GC needs to see

- Which upcoming work packages are genuinely ready.
- Which constraints threaten milestone or handoff dates.
- Which trade commitments are likely to slip.
- Where multiple trades are competing for space, access, equipment, or time.
- Which issue needs an owner, escalation, or decision.
- What recovery options are available without pretending the GC controls another company’s workforce.

### What the GC should not see by default

Protect subcontractor-sensitive information. The GC view should not automatically expose individual worker details, internal labor costs, or proprietary production data. Use role-based permissions and share only the operational facts needed for coordination.

### GC value proposition

> **See the difference between a schedule activity and work that is truly ready for handoff.**

The GC can coordinate the shared environment; the subcontractor retains authority over its own crews and execution decisions.

---

## How the two products connect

```text
                    THEIA NETWORK
        shared readiness, handoffs, constraints, outcomes
                              │
              ┌───────────────┴───────────────┐
              │                               │
      THEIA FOR TRADES                  THEIA FOR GCs
      Own the crew decision              Coordinate the job
      • work readiness                   • cross-trade readiness
      • crew eligibility                 • handoffs and commitments
      • next-best work                   • constraint escalation
      • approval and dispatch            • milestone risk
      • actual vs. expected              • shared recovery options
              │                               │
              └───────────────┬───────────────┘
                              │
                 existing project systems
       schedule • drawings • RFIs • submittals • materials
          workforce • equipment • progress • documents
```

The network effect should come from shared project context—not from forcing every company into one operating workflow. A trade can get value from Theia alone. The product becomes more powerful when the GC and multiple trades share relevant readiness and handoff signals.

---

## Data architecture for the website

Describe the architecture as a **construction operations graph** with a recommendation loop.

### Core objects

| Object | What it represents |
|---|---|
| Work package | The unit of work a team can plan, prepare, assign, and complete |
| Area | Where the work happens: project, building, level, room, zone, or system |
| Constraint | What prevents or threatens execution |
| Readiness state | Whether the work is ready, blocked, at risk, complete, or unknown |
| Resource | Crew, person, tool, lift, equipment, material, or future robot |
| Capability | Skills, certifications, capacity, production profile, and eligibility |
| Handoff | A dependency between trades, teams, areas, or systems |
| Decision | The recommended, approved, modified, or rejected intervention |
| Outcome | What actually happened after the decision |

### Data flow

```text
Existing systems + field updates + optional visual evidence
                         │
                         ▼
             Theia operational context layer
     work • area • constraint • resource • capability
                         │
                         ▼
             readiness and feasibility assessment
                         │
                         ▼
              options, tradeoffs, and recommendation
                         │
                         ▼
       human approval → assignment → observed outcome
```

### Product principle

Theia should never imply omniscience. When information is missing or stale, it should say **“needs confirmation”**, show what is unknown, and ask the smallest useful question.

### Future extensibility

The same resource model can eventually represent robots or AI agents alongside human crews. That is a long-term architectural direction, not the initial website promise. The first product must create value with human crews and existing equipment.

---

## Concrete electrical-contractor scenarios

Use these scenarios throughout the site to make the product tangible.

### Scenario 1: The planned zone is not ready

An electrical crew is scheduled to begin overhead rough-in in Zone B. The mechanical predecessor is incomplete, so the crew cannot start without creating rework or trade interference.

Theia:

- Marks the planned work as blocked and identifies the predecessor.
- Finds other electrical work that is ready in Zones C and D.
- Checks drawings, material status, access, inspection state, and required lift.
- Confirms which crew is eligible and available.
- Recommends moving the crew to the best executable option.
- Records the superintendent’s approval and communicates the revised assignment.

### Scenario 2: Material arrived, but the schedule did not catch up

Cable tray for an electrical room arrives earlier than expected. The work was not on tomorrow’s plan because the lookahead still reflected the original delivery date.

Theia:

- Detects that the material constraint has changed.
- Re-evaluates nearby work packages.
- Checks whether the area, drawings, access, inspection path, and crew capability are ready.
- Shows the cost of pulling the work forward versus holding the crew to the existing plan.

### Scenario 3: The qualified crew is unavailable

A medium-voltage task requires a qualified crew. The planned foreman is absent and a lift is already committed elsewhere.

Theia:

- Excludes ineligible crews instead of treating every available worker as interchangeable.
- Identifies qualified alternatives.
- Checks equipment conflicts and travel or mobilization implications.
- Presents a recommendation or escalation path with the assumptions visible.

### Scenario 4: Inspection or rework changes tomorrow’s plan

An inspection fails in one area, creating rework and preventing the next handoff.

Theia:

- Links the failed inspection to affected work packages.
- Separates work that is blocked from work that can continue elsewhere.
- Recommends a sequence that protects productive hours and critical commitments.
- Tracks whether the recovery action actually reduced idle time or protected the milestone.

These are illustrative scenarios. Do not present example outcomes, savings, or recovery durations as guaranteed results.

---

## Competitive positioning

The competitor story should be respectful and specific. Theia does not need to claim that other products are weak; it needs to explain that they own different operating layers.

| Product | Strongest operating layer | What it helps teams do | Theia’s distinction |
|---|---|---|---|
| Touchplan | Lean planning and collaborative pull planning | Connect master schedules to pull plans, lookaheads, constraints, commitments, and field collaboration | Theia starts with the live feasibility of each trade’s work and recommends the next crew-to-work decision |
| Outbuild | Connected scheduling, lookahead, and field coordination | Keep master schedules, lookaheads, weekly plans, roadblocks, and schedule updates connected | Theia is designed to reason across readiness, crew eligibility, equipment, and executable alternatives—not only maintain the plan |
| ALICE | Schedule simulation and resource optimization | Generate and compare schedule scenarios using activities, constraints, resources, production rates, materials, and equipment | ALICE asks which schedule or resource scenario is best; Theia asks which work is executable now and who should act next |
| Buildots | Physical-progress intelligence | Use cameras, drones, scans, BIM, and schedules to measure installed progress and forecast delay risk | Buildots improves the state estimate; Theia uses operational state to recommend and track an intervention |
| Procore | Broad construction management and resource/workforce coordination | Connect project information, field workflows, workforce planning, equipment, materials, communication, and analytics | Theia is a focused decision layer for trade production: readiness → eligible crew → next action → outcome |

### The important ALICE distinction

Do not describe ALICE as merely a static scheduling tool. Its public product materials describe schedule optimization, resource constraints, production rates, materials, equipment, scenario comparison, and recovery use cases.

The defensible distinction is narrower:

> **ALICE optimizes schedule activities and modeled resources. Theia aims to maintain live work-readiness and make crew-to-work decisions under changing field conditions.**

The website should avoid claiming that ALICE cannot model a constraint. A constraint can often be represented in a schedule. Theia’s difference is the operational loop around discovering, validating, and acting on current field readiness—especially for a specialty contractor’s daily crew decisions.

### ALICE and Theia: capability boundary

Use this table in the website-builder agent’s product comparison section. Treat the ALICE column as a summary of publicly described capabilities. Treat the Theia column as the intended product direction, not a claim that every capability is already shipped.

| Capability | ALICE includes | Theia includes or aims to include |
|---|---|---|
| Schedule activities and dependencies | Yes: imports or creates construction schedules and works with activity logic | Uses schedule activities as one input, then breaks them into trade-level executable work packages |
| Crew resources | Models crews, crew quantities, availability limits, calendars, and resource costs | Models actual trade crews, named foremen, crew composition, availability, location, and eligibility |
| Worker skills and certifications | Public materials emphasize modeled crew resources; individual worker-level eligibility is not the center of the product | Matches specific people or crews to work using skills, certifications, composition, and task requirements |
| Equipment | Models equipment availability, limits, and costs as schedule resources | Checks whether the required lift, tool, test equipment, or machine is actually available for the proposed move |
| Materials | Models material constraints, quantities, costs, and need-by dates | Tracks whether material is received, staged, accessible, and ready for the specific work package |
| Production rates | Uses production rates, quantities, and resource assumptions to evaluate schedule scenarios | Learns from actual trade execution and uses observed performance to improve recommendations over time |
| Planned constraints | Represents constraints and milestones in the schedule optimization model | Maintains live constraints from RFIs, submittals, drawings, inspections, access, other-trade handoffs, and field updates |
| Physical work readiness | Can optimize around a constraint once it is modeled in the schedule | Determines whether work is executable now or on the next shift, while showing evidence and uncertainty |
| Progress and deviation | Can use schedule updates and progress information to re-evaluate remaining work | Combines progress with readiness, resource capability, and current field conditions to select the next action |
| Scenario generation | Generates and compares schedule/resource alternatives | Generates feasible crew-to-work interventions, with operational assumptions and tradeoffs visible to the approver |
| Resequencing and recovery | Re-optimizes schedules and resource allocations around modeled disruptions | Recommends what a superintendent or general foreman should change in tomorrow’s plan |
| Cross-company handoffs | Can represent schedule relationships and constraints between activities | Makes the readiness of one trade’s handoff visible to the affected trade and GC, with ownership and escalation |
| Assignment and execution | Produces optimized schedule scenarios for human teams to review and act on | Sends or records the approved assignment through the contractor’s workflow, then observes the result |
| Learning loop | Compares schedule scenarios and actualized schedule inputs | Records recommendation → approval → execution → outcome so predicted and actual results can be compared |
| Future robots and AI agents | Primarily models construction resources within schedule optimization | Extends the same work/resource model to robots and AI agents later; human crews are the initial focus |

The concise website version should be:

> **ALICE optimizes modeled construction schedules and resources. Theia is designed to keep a live readiness model and help trade leaders decide which eligible crew should perform which executable work next.**

### The overlap is real

The website should acknowledge that ALICE and Theia overlap on many planning and optimization capabilities. Both concepts can include:

- Task dependencies.
- Crew types and crew quantities.
- Crew availability limits, calendars, and costs.
- Subcontractors and trades.
- Equipment and materials.
- Production rates.
- Actual progress.
- Resource optimization.
- Resequencing.
- Recovery scenarios.
- Forecasting consequences.
- Optimization of remaining work after a disruption.

Theia should not win the comparison by pretending these capabilities belong exclusively to Theia. The opportunity is the layer below and after schedule optimization: keeping field readiness current and helping a trade decide what a specific crew can execute next.

### The constraint caveat

Do not say, “ALICE cannot handle RFIs, materials, or access.” A user can often translate those conditions into schedule constraints, resource limits, dates, or production assumptions, and ALICE can optimize around the modeled condition.

The more precise distinction is:

> **The difference is not simply which constraints a product can represent. The difference is who discovers, validates, and maintains those constraints as field conditions change.**

ALICE’s core object is:

```text
schedule activity + modeled resources + scheduling constraints
```

Theia’s intended core object is:

```text
executable work package + live readiness state + actual resource capability
```

That distinction should be visible in the website copy and graphic.

### Modeling burden and state freshness

ALICE’s public workflow requires a project team to create or import a schedule, define resources and constraints, and run scenarios. Theia’s intended value is to reduce the gap between the modeled plan and current field reality by connecting operational signals, surfacing stale or missing information, and asking for confirmation when needed.

This is a product ambition, not a claim that Theia can automatically observe every jobsite condition on day one. The initial experience should combine integrations with lightweight human updates. Cameras, drones, and reality capture can improve the state estimate later.

### Different operating buyer

ALICE is most naturally framed around the question:

> **How should the overall project be scheduled, optimized, or recovered?**

Theia’s initial trade product is framed around:

> **What should my electricians work on next shift, given what is actually ready and who is available?**

The first question belongs primarily to project controls, planners, GCs, owners, and senior project teams. The second belongs to the electrical general foreman, trade superintendent, and operations leader who controls the crew decision.

### Detailed electrical comparison scenario

Use this as an interactive website story:

```text
Tuesday afternoon
Crew Mike is planned for Zone B overhead rough-in tomorrow.
```

ALICE may have a model containing:

- The Zone B activity.
- Electrical crew type and quantity.
- Duration and production-rate assumptions.
- Predecessor logic.
- Material and equipment requirements.
- The project schedule.

If the mechanical predecessor is delayed, ALICE can re-optimize the remaining modeled schedule and resource allocation.

Theia is designed to ask a more operational question:

```text
Can this crew actually work Zone B tomorrow at 7:00 AM?
```

It checks or requests confirmation for:

- Drawing availability and revision.
- Open RFI or submittal.
- Material physically received and staged.
- Predecessor physically complete.
- Inspection status.
- Area access.
- Lift and tool availability.
- Crew skills, certifications, and composition.
- Current crew assignment and location.

If Zone B is not executable, Theia searches the trade’s backlog for alternatives—for example, Zone D or the electrical room—then presents:

```text
Recommended move: assign Crew Mike to the best verified ready work package.
Reason: Zone B is blocked by an incomplete predecessor.
Actions: Approve · Modify · Escalate
```

Any predicted hours, recovery, or milestone impact shown in a product mockup must be labeled **illustrative** until supported by customer data.

### Internal positioning assessment

Include this section in the builder brief for strategy, but do not publish the overlap percentages as verified market facts.

The research suggests:

- **At the conceptual optimization level, ALICE has substantial overlap with Theia.** It already addresses task logic, crews, subcontractors, equipment, materials, production rates, progress, constraints, scenario generation, resource optimization, resequencing, and recovery.
- **At the specialty-trade daily workflow level, the overlap appears materially lower.** The unresolved boundary is the full loop of live state acquisition → automated or assisted make-ready → named crew eligibility → next-best executable work → general-foreman approval → assignment → measured outcome.

An earlier directional estimate placed ALICE’s conceptual overlap around **50–60%**, later revised upward to roughly **65–75%** after reviewing its resource and recovery capabilities. These figures are internal hypotheses, not independently measured statistics, and should not appear in public website copy.

### Pitch correction

Do not pitch Theia as:

> “AI dynamically optimizes construction schedules and reallocates resources when conditions change.”

That description overlaps directly with ALICE’s public positioning.

Pitch Theia as:

> **“ALICE optimizes the schedule. We operate the trade.”**

Or, more specifically:

> **Theia is the daily production-control system for self-performing trades. It determines which work is actually executable and recommends where each crew should work when field conditions deviate from the plan.**

The contrast should be simple:

| ALICE | Theia |
|---|---|
| What is the optimal remaining project schedule? | Who should actually work where tomorrow morning? |
| Optimizes modeled activities, resources, and constraints | Maintains live readiness and recommends an executable crew-to-work move |
| Primarily schedule/scenario-centered | Primarily trade-production and decision-centered |

### Customer-discovery test

Treat ALICE as the most important competitor to test with electrical contractors. Ask an electrical general foreman:

> **“When something changes tomorrow, could ALICE, P6, or Touchplan already tell you where to move your crews—or do you still make that decision yourself?”**

This is a falsification question, not a sales question.

- If contractors consistently say their existing tools already make the crew move decision, Theia’s wedge is weak.
- If they say the existing tools produce a revised schedule but the general foreman still decides how to run the crews, that validates the boundary Theia is targeting.

### Positioning line

**ALICE optimizes the schedule. Theia helps operate the trade.**

### Supporting line

Theia is not trying to win the planning meeting. It is built for the moment after the plan meets the jobsite.

---

## Comparison / positioning graphic specification

Create a clean, qualitative 2×2 graphic titled:

> **Where construction software operates**

### Axes

- **Horizontal axis:** Information and decision depth  
  `System of record / visibility` → `Operational recommendation / action`
- **Vertical axis:** Time horizon  
  `Project and plan` → `Live field / next shift`

### Suggested placement

```text
                         LIVE FIELD / NEXT SHIFT
                                  ▲
                                  │                 THEIA
                                  │       readiness + next-best crew move
                                  │
                                  │   Buildots
                                  │   physical progress / risk signals
                                  │
                                  │                    Procore
                                  │              workforce + project coordination
                                  │
                                  │ Touchplan / Outbuild
                                  │ lean planning + lookahead collaboration
                                  │
                                  │                         ALICE
                                  │             schedule/resource optimization
                                  └────────────────────────────────────────────▶
                            RECORD / VISIBILITY       RECOMMENDATION / ACTION
```

The graphic is illustrative, not a performance ranking. Place products as broad labeled bubbles, not precise scores. Add a footnote:

> **Illustrative positioning based on publicly described product focus. Capabilities vary by configuration, integration, and customer workflow.**

### Optional second visual: Theia closed loop

Use a circular or horizontal flow:

```text
planned work → field state → readiness → available resources
      ↑                                      ↓
actual outcome ← execution ← approval ← recommendation
```

Use a visual distinction between:

- Gray: existing systems and inputs.
- Blue: Theia’s operational reasoning layer.
- Green: human-approved action.
- Gold: measured outcome and learning.

---

## Recommended site structure

1. **Home** — “Turn blocked work into the next executable move.”
2. **For Electrical Contractors** — crew decisions, work readiness, daily production.
3. **For General Contractors** — shared readiness, handoffs, and milestone risk.
4. **How It Works** — connect data → assess readiness → recommend → approve → learn.
5. **Scenarios** — electrical examples with before/after operational decisions.
6. **The Operating Model** — explain how Theia fits beside Procore, P6, Autodesk, ERP, and field tools.
7. **About / Vision** — humans first; robots and AI agents later as additional executable resources.
8. **Request a Demo** — ask for company type, trade, project count, current scheduling system, and biggest daily coordination failure.

### Suggested navigation labels

**Product · For Trades · For GCs · Scenarios · How It Works · Request a Demo**

---

## Tone and visual direction

### Tone

- Operational, precise, and grounded.
- Confident without making magic claims.
- Written for builders and operations leaders, not only software buyers.
- Prefer “recommend,” “surface,” “connect,” “validate,” and “help teams decide.”
- Avoid “autonomous,” “fully automated,” “eliminates delays,” and “single source of truth” unless the specific claim is substantiated.

### Visual language

- Dark graphite, concrete, steel, and warm safety-orange accents.
- High-contrast status colors used sparingly and accessibly.
- Dense but legible operational cards.
- Real project geometry: zones, levels, systems, handoffs, and crews.
- Avoid clichéd construction stock photography as the primary explanation of the product.

### Accessibility requirements

- Do not encode readiness only by color.
- Use labels and icons in addition to status colors.
- Maintain keyboard focus states and readable contrast.
- Provide text alternatives for the comparison graphic.
- Keep animated schedule or field visualizations optional and pauseable.

---

## Proof and claim guardrails

The website builder should treat the following as product principles, not unverified facts:

- Theia is intended to reduce the gap between planned work and executable work.
- Theia is intended to help leaders make better crew-to-work decisions.
- Theia can be designed to integrate with existing systems instead of replacing them.
- Recommendations should be human-approved in the initial product.
- Cameras, drones, and other visual inputs are future or optional state-estimation inputs unless implemented.
- Robots and AI agents are a future extension of the resource model, not the initial customer promise.

Do not publish:

- Unverified competitor percentages or capability scores.
- Claims that no competitor performs a capability without current evidence.
- Guaranteed schedule savings, labor savings, or delay reduction.
- Claims that Theia automatically knows field conditions without an evidence path.
- “First” or “only” market claims.

---

## Research references for fact-checking

Use official product pages for competitor descriptions and refresh these links before publication:

- [Touchplan — Lean construction planning](https://touchplan.io/digitize-lean-construction-planning/)
- [Outbuild — Lookahead and field planning](https://www.outbuild.com/construction-lookahead-software)
- [ALICE Optimize](https://www.alicetechnologies.com/alice-optimize)
- [ALICE — constraints and milestones](https://support.alicetechnologies.com/hc/en-us/articles/22918236368535-Constraints-and-Milestones)
- [Buildots — construction intelligence platform](https://buildots.com/product/)
- [Procore — resource management](https://www.procore.com/resource-management)

These references support the positioning framework; they do not establish universal product limitations. The website copy should describe Theia’s intended operating layer rather than make absolute claims about what competitors can or cannot do.

---

## Final message for the site

> **The future of construction operations is not another schedule. It is a system that understands the work, the conditions, the resources, and the decision required to keep building.**

> **Theia starts with people, crews, and existing tools. It gives specialty contractors a clearer path from plan to executable work—and creates the operating foundation for whatever comes next.**
