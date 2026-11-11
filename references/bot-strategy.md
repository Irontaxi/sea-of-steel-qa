# Sea of Steel bot strategy and reinforcements

**Revision 2026-11-11 · Development reference**

This page describes bot behavior in campaign sectors and single-sector Scenarios. Compare QA reports against the build under test. Keep this reference in sync whenever costs, force limits, or arrival and targeting rules change. For hull, weapon, and damage values, see the [ship stats and damage reference](./ship-stats-2026.11.10.2.html).

## How the bot picks a fight

- **Recon and contact memory.** Surface forces act on what their own sensors detect or what friendly aircraft and other groups report. They estimate the contact’s course from the last report. With no fresh contact, they search the last known area or resume patrol.
- **Surface and air coordination.** Ships can hold farther out while their aircraft make an attack. Carrier groups screen the carrier behind the surface force. Damaged ships prioritize damage control, and badly damaged forces can withdraw.
- **Convoys and submarines.** Convoys use a route across the sector. Submarine packs favor allied convoys when they have a usable contact. Scheduled convoy and patrol arrivals are separate from the purchases below.
- **Opening setup.** Paid arrivals wait until combat opens. In deployments that use starting fleet ingress, the three-minute setup period gives the player time to assemble before attacks and recon begin.

## Sector reinforcement budget

The bot starts each deployment with **500 resources**. Every **30 simulation seconds**, each operational enemy-held airfield earns **35 resources**, up to a shared balance of **1,800**. Capturing an airfield cuts off its contribution. Neutralizing the runway suspends income until infantry rebuild it past 20% condition. The bot can still spend what it has left.

| Purchase | Cost | Deployment rule |
| --- | ---: | --- |
| Airfield resupply | 30 per aircraft | **2–6 aircraft** per flight. Airfields near fighting get priority. Aircraft fly in from an uncontrolled edge, reserve hangar slots in transit, and must recover to become available. One inbound flight per airfield. |
| Base recapture | 450 | **2–4 amphibious tanks and 3–4 infantry squads**, all aboard landing craft. The bot can target a lost airfield or a bunker chain. It favors a concealed beach with a passable inland route and can use a direct approach when needed. One active recapture wave per base. |
| Submarine hunter pack | 600 | **2 submarines**. At most **3 live packs** in the sector, counting scheduled arrivals, paid groups, and free stalemate patrols. |
| Light expedition | 300–600 | **2–3 frigates or destroyers**. One paid expedition active at a time. |
| Surface hunter group | 1,100–1,700 | **1 cruiser or battlecruiser and 3–4 light escorts**. One paid hunter group active at a time. A current observation of a valuable enemy ship can trigger the purchase. |

Recapture and frontline airfield supply can take priority over saving for a hunter group. Purchases debit resources when the force actually dispatches. Naval and air reinforcements enter outside current player observation and away from nearby player units. A blocked arrival can retry without charging the budget. Paid forces do not add targets to the sector’s victory objective.

Fresh ground forces sent to recapture bases come from paid landing-craft waves. Existing garrisons can still respond locally. Where legacy stalemate relief is enabled, it can send limited naval or fighter waves after a prolonged lull and uses the same submarine cap.

## What to look for in QA

- Resupply aircraft enter from the edge and only join the ready inventory after landing. Filling a hangar or losing the runway should prevent an extra delivery to that base.
- Recapture forces travel on the water before unloading. Sinking a loaded boat should prevent its cargo from appearing ashore. Infantry attempt to reclaim the base while tanks engage defenders.
- Submarine packs share the same live cap across scheduled arrivals, purchases, and relief. Ships lost or withdrawn free up space.
- Paid arrivals should stay out of the main-objective count. When reporting a balance problem, include the build, seed, battle time, and the arrival or report you saw.
