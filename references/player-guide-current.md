# Sea of Steel current player guide

Updated November 23, 2026 for **2026.11.23.1-mainqa**, verified live in Full **Testing** (**26869374**). The source cut is **CL3266**: transport gameplay compiled in CL3265 plus content-only retirement of six unused prototype definitions. Shared models, textures, materials and weapon artwork remain. Full public Default stays **26471403**; Demo stays **26835965** and remains suspended from further builds/testing. These instructions target Full Testing.

November 21 co-op note, retained without new paired-session acceptance: snapshot recovery is a bounded safeguard, **not proof that the host-focus-loss guest freeze is fixed**. Physical paired focus-loss acceptance remains open. See [November 21 release and integration notes](main-integration-2026-11-21.md) for inclusion and test limits.

**Current test policy:** all further testing uses the main/full app, including main-host/main-guest multiplayer on separate Steam accounts. Demo builds, cooks, uploads and testing are suspended under the CL3244 policy until the human explicitly reopens actual Demo preparation. The existing Demo release and features are preserved.

## Interface size

Open Settings with F6 and select the interface/accessibility page. **Interface size** ranges from 75% to 150% in 5% steps, in addition to automatic scaling for the actual window resolution. Changes preview immediately and save on close. Host and guest use independent local values. Narrow or small windows can constrain the final fit.

## Menu access

Settings and Quit remain available in the menu footer. Opening Settings retains the active menu section and selected card; closing or cancelling returns to the existing page.

## Sortie local card game

Open the far-right **Sortie** main-menu tab in Full or Demo. Choose the U.S. or Japanese starter, then play against the bot or pass between two local seats. There are **58 card definitions**, including supplies and tokens, and **45 cards per starter deck**.

Fuel, Ammo and Resources cards pay the costs shown on cards. Select a card to inspect its rules and available actions; follow the phase controls through deployment, attacks, interception and responses. These card costs are separate from naval-battle reinforcement resources.

In a local two-seat match, hand over the computer and let the incoming player confirm **Ready** before showing the hand. Opposing hands remain concealed. Inspect full card text when the battlefield is crowded.

Closing and reopening Sortie keeps the match in the current running game session. **New Match** starts another match. This first playable has **no online card multiplayer or disk match save**. Its local two-seat mode is separate from naval-battle online co-op. Fourteen approved full card faces now appear in the library and inspector. The separate **LIVE** strip shows current model values, including damage/readiness; printed artwork is a reference. Native rules, tooltips and legal actions remain authoritative. This art integration adds no new card abilities. Neutral backs remain provisional.

## Mine warfare and fleet supply

Enable laying on a ship with mine stock, then move forward through valid, sufficiently deep water. Mines release behind the hull and consume stock. Stop laying when the line is complete. Only the exact ship that laid a mine is immune to it; other friendly hulls and enemies remain vulnerable. Mines without known laying ownership retain their danger. Owner identity is retained in same-build battle saves.

Sweeping on an eligible ship limits forward speed to half and detects enemy mines in its forward 120-degree sector within sweep range. A successful sweep cuts a mine loose and creates a contact. Use eligible guns with sight and range to clear it; keep the rest of the fleet away until the route is checked.

Fleet supply uses finite stocks. Bring the supply ship and recipient within 75 m, slow or stop both, and let simulation time run to transfer fuel, shells and mines. U.S./Japanese supply, minelayer and minesweeper hull presentation includes the current specialist art adjustments; visual changes do not grant new inventory or abilities.

## Mixed transports and physical recovery

**Transport has three mixed cargo slots; Large landing craft has two.** Configure each new hull before confirming purchase or deployment. A slot holds an amphibious tank, amphibious supply truck, troop truck with eight passengers, or a paid infantry boat with twelve people. Infantry boats carry no vehicles or nested boats and cannot be bought separately. Existing direct grants remain, with twelve people per fresh small-craft cohort.

Deploy mixed cargo from the bow into clear water, then order vehicles ashore and land the small boat at a suitable natural beach. Recover the same actual units through the re-embark controls and a compatible free slot. Stop pending launch or landing operations first. Vehicles must be within **80 m** to request return and then move to the bow; boats reserve a slot and return physically. Crew, damage, fuel, ammunition and finite supplies remain with the units through recovery and same-format saves. Owned cargo controls cannot refill them.

Current hull prices are **600 / 450**, plus **150** per tank, **100** per supply truck, **180** per truck with eight passengers, or **170** per twelve-person infantry boat including its hull once. Read the [resource and cargo quote reference](player-resources.md#mixed-transport-and-cargo-purchases) and the actual confirmation quote. The existing Amphibious Assault grant remains two craft at 350 each, with a 4,050-point trial force and 5,000-point budget. Saved or active cohorts are not resized by fresh defaults.

This transport behavior is live in the release above. Newly prepared in-game handbook wording is pending a future compiled build. The sections retained below keep their dated test limits; this transport update does not certify unrelated paired, input or visual checks.

## Land command

Save selected ships or land units with Shift + 1–9; recall with 1–9. A quick second press glides toward surviving members. The selection header shows the selected count. Shared land orders occupy the first row and applicable abilities appear below.

U.S. infantry can use MG Cover; Japanese infantry can use Bayonet Charge; both use Hand-to-Hand where eligible. Use the offered ability control and a valid visible target where requested. Grenades require a visible dry-land location within range. An admitted grenade follows a flight arc, lands and waits for its fuse before authoritative damage checks current victims and cover. Its blast can harm allies and the thrower. Removing the thrower does not cancel an admitted event. Current-format checkpoints retain pending grenades; older save layouts are not migrated. Actual paired and final visual acceptance remain open. Dig In uses drag-facing placement on reachable, suitable ground and spreads a reduced squad across the continuous trench.

## Reinforcements and aviation

Filter the catalogue with **All**, **Ships**, **Land Units** or **Planes**. A Land Units list may be empty where direct purchases are unavailable. Read the quote before confirming, then choose ingress and destination as prompted.

Eligible Career sectors offer faction-specific **Combat Recon**: **450 resources purchases one aircraft**, P-38L for the U.S. or Ki-45 for Japan, using normal fighter flight dynamics. Choose map-edge ingress and a patrol/screen area. This is the current integrated behavior in 2026.11.23.1-mainqa; the earlier three-aircraft description is historical.

The Aviation panel creates a fresh sortie when aircraft and launch conditions allow. Use selected-flight controls to redirect an existing flight. Select dive or torpedo bombers before a carrier strike.

## Other current controls

The submarine depth control shows the current mode; clicking requests the next Surface → Periscope → Deep mode. Mixed selections use the first eligible submarine. Water-depth and battery restrictions still apply.

With Labels enabled, select one live unit for passive range overlays; selecting several clears those overlays. Route crosses and lines remain even though the DEST text is removed.

Settings → Audio → **Audio output** selects System Default or an available playback endpoint. Microphone selection is separate. Development Cinematic Freecam retains its existing Pause binding. In active cinematic mode, **Ctrl + Mouse Wheel** changes pitch/yaw look sensitivity from **0.10x to 4.00x**; it resets to 1.00x when cinematic mode is enabled. Pitch and yaw ease towards the aim. Ordinary wheel still changes free-flight speed or follow distance. The F10 overlay shows the look rate.

## New career finale and scenario terrain

Eligible newly generated sector careers can assign an authored finale in the easternmost non-entry sector, with central latitude as the tie break. Its 2,800-point enemy force contains a 2,400-point national capital ship and two 200-point destroyers, paid from the existing budget. Unaffordable setups fail before travel. Existing careers are not retrofitted. Physical finale, current-format save/resume and paired gameplay checks remain open.

Fresh standalone **scenario seed666** uses the corrected 90-degree clockwise shared terrain layout. Existing saved terrain keeps its saved coordinates; career seed666 and other scenario seeds are unchanged. Actual site/world/guest-terrain visual acceptance remains open.

## Co-op snapshot recovery and current checks

In an established guest session, five wall seconds without a successfully completed fleet update during active play can trigger a request for a fresh host-authoritative baseline. Requests have a ten-second cooldown and bounded transactions. Surviving guest objects, selections and camera are retained; genuine removals and assignment revocations still apply. A stopped host, connection or renderer must resume before recovery can help. This safeguard and tracing do not establish the reported freeze's root cause or a paired fix.

Run subsequent multiplayer checks as **main/full host to main/full guest** on separate Steam accounts, using the same testing version. Verify actual moving ship/land/aircraft presentation and executed orders before and after host focus loss. Preserve both complete logs privately with UTC away/return times before reconnecting or toggling pause. Do not infer visible recovery from an order acknowledgement alone. Development trace data distinguishes publication, receipt, commit and presentation; timestamps alone do not prove displayed pixels.

## Scope and references

Approved asset inclusion through CL3199 does not establish recruitable commandos, guard-dog behavior, prisoner rescue or rubber-duck combat. The campaign capital ships are included in this testing release only for the authored finale of eligible new careers; they are not ordinary fleet purchases or reinforcements. Older diagnostic and source-only notes do not supersede this release identity. Human play, visual approval and paired-session acceptance remain specific to their tested scope.

The printable and in-game handbook revision prepared with this guide is pending integration; this page does not claim it has replaced the handbook in the live build.

- [Player resource payouts and reinforcement spending](player-resources.md)
- [Bot strategy and reinforcements](bot-strategy.md)
- [Historical ship stats for 2026.11.10.2](ship-stats-2026.11.10.2.html) — a dated reference, not a current-stat snapshot.
- [Reference index](../README.md#qa-reference)

