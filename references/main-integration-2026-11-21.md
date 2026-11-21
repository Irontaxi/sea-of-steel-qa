# Sea of Steel main integration notes for November 21

**2026.11.21.2-cooprefresh is verified live** in Full Testing **26835970** and Demo Default **26835965**. Full public Default remains **26471403**. The release freezes source CL3243 and documentation CL3242, with aircraft audio CL3238 and the integrations through CL3241 below. The earlier local 2026.11.21.1-audioqa candidate and source3206 diagnostic pair are superseded as the current testing reference.

Matched Development packages passed native compilation, cook/stage and verification of 767 required payloads per edition, normal bootstrap CPU checks and actual Steam/EOS startup. These checks do not establish physical listening or paired focus-loss acceptance.

**CL3244 test policy:** after this final authorized Full/Demo recovery series, all subsequent builds and testing use the main/full app, including main-host/main-guest multiplayer on separate Steam accounts. Demo builds, cooks, uploads and tests are suspended until the human explicitly reopens actual Demo preparation. Existing Demo releases, archives, app and features remain intact. Older Full/Demo test instructions do not authorize another Demo test.

## CL3243 snapshot recovery

An established guest can request a fresh host-authoritative baseline after five wall seconds without a completed fleet frame during active play, with requests at least ten seconds apart. Recovery reuses the reliable baseline path and retains surviving ship, land and carrier-flight proxies, selections, terrain and camera. Genuine host removals and revoked assignments still reconcile. Incomplete soft transactions time out after 30 seconds; host progress retains its existing three-attempt bound. Soft exhaustion does not use the destructive initial-join failure path. Application is incremental, not an atomic rollback of all streams.

Main rebuilt and four co-op checks passed with one known synthetic no-live-channel RPC warning. Isolated validation passed ten focused checks with two fixture warnings; the final three trace-enabled affected checks passed with one fixture warning. Shipping compilation also passed. These are native/fixture results, not actual paired focus-loss acceptance.

This is a bounded mitigation plus development diagnostics. **The reported host-Alt-Tab freeze's root cause is not proven, and freezeFixed remains false in the live receipt.** A suspended host, broken connection or stopped renderer cannot recover until it resumes. Snapshot trace timestamps do not prove displayed pixels. Development tracing is independent of recovery and is compiled out of Shipping.

Use the same current main/full testing version on two separate Steam accounts for subsequent focus-loss, pause, movement, aircraft and audio checks. Keep complete host/guest logs private and record UTC away/return times. See the [current player guide](player-guide-current.md) for controls and current scope.

## Menu and cinematic controls

Settings and Quit now remain available in the menu footer. Settings retains the active section and selected card; closing or cancelling restores the existing page. Sortie inspection and Discard captions have additional layout corrections for increased interface size.

In active development cinematic mode, **Ctrl + Mouse Wheel** adjusts pitch/yaw mouse-look sensitivity between **0.10x and 4.00x**. It resets to 1.00x when cinematic mode is enabled; the F10 overlay shows the rate. Pitch and yaw ease towards the mouse aim. Ordinary wheel still adjusts free-flight movement speed, or follow distance while following. Rendered input checks passed; physical mouse feel and packaged acceptance remain open. This is not a new naval command binding.

## Sortie card artwork

The library and inspector use all **fourteen approved full card faces**. A separate **LIVE** strip reads current values from the native model; printed values remain part of the approved reference artwork. Compact badge bindings are retained where available, and native tooltips and inspection text continue to govern rules and legal actions.

This is an artwork and presentation integration. It adds no new card abilities, online card multiplayer or disk match saves. Actual viewport/input checks passed, including damaged/spent inspection at 100% and 125% interface size, with the existing arrow-font fallback warning. New ability work remains separate.

## Aircraft audio

The aircraft engine MetaSound loop contract and virtual-voice recovery were corrected while preserving the current recordings and Kimmo's tuning. Native recovery checks passed, including a six-minute latest-head run. These checks do not establish that every aircraft is audible during human play, or that packaged host/guest audio is accepted.

Class audio authoring support also adds optional definition fields and preset templates. Blank optional slots remain unassigned; this does not mean that every class has newly recorded or runtime-bound sounds.

## New career capital-ship finale

Eligible **newly generated sector careers** can assign an authored finale in the easternmost non-entry sector, using central latitude to break a tie. It uses the existing budget: **2,800 points** for a **2,400-point national capital ship and two 200-point destroyers**. An unaffordable setup fails before travel. Existing careers are not retrofitted, and these ships remain excluded from ordinary scenarios, fleet purchases and reinforcements.

The capital ship has **3,250 hull**, **338 nominal salvo damage**, and a **1.25 damage multiplier against battleships**. Armor is **0.75** under the existing direct-hit formula. This provides resistance, not immunity; fire, flooding and subsystem rules still apply. Speed, turning, range, firing interval and AA are unchanged from the battleship baseline.

Focused native checks and actual art viewport review passed. Two broader catalog assertions still fail and reproduce with exact parent data under the current binary; they have not been counted as passes. Physical finale play, current-format save/resume and paired main-host/main-guest acceptance remain open.

## Grenade flight and fuse

Admitted grenades now follow a replicated flight arc, land and wait for their configured fuse before authoritative damage. The blast checks current victims and cover at detonation and can harm friendly units and the thrower. Removing the thrower does not cancel an admitted event. Current-format checkpoints preserve pending arrivals; older save layouts are not migrated.

Pending grenade arrivals are capped at **24**. Rejected throws do not spend stock or cooldown. Native checks passed, including admission when a cosmetic actor is lost. Actual five-frame visual review and paired flight/fuse/pause/rejoin behavior remain pending; the flight primitive is provisional art.

## Fresh seed666 scenarios

Fresh standalone **scenario seed666** uses a **90-degree clockwise** rotation through the shared height mapping before terrain and sites are generated. Existing saved terrain keeps its coordinates. Career seed666, adjacent seeds and chart axes are unchanged.

Generation/save/transfer, asynchronous parity and projection checks passed. Actual preview/world/site alignment and received guest-terrain visual confirmation remain open.

## Traffic steering and remaining verification

Intermediate traffic steering targets now stay ahead of moving ships, with reverse and opposite-heading guards. Bounded encounter checks passed; this is not broad fleet or shoreline-navigation acceptance. The clean main binary excludes the held navigation experiments.

The recovery release is live, but existing physical, visual and paired checks remain open until individually tested. All new tests follow the main/full-only policy above. This page is a release/integration reference, not a new QA checklist; it does not change existing tester results.

- [Current player guide and verified Steam build scope](player-guide-current.md)
- [Resource payouts and reinforcement spending](player-resources.md)
- [Reference index](../README.md#qa-reference)
