# Sea of Steel · Player resource payouts

Updated November 12, 2026. Covers generated Career sectors and standalone Scenarios.

## What pays

The **Objectives** panel lists the objectives available in your round. Main and optional objectives both pay when their conditions are met. Each objective pays once. In Career, an already-paid objective stays paid on a return to that sector.

| Objective | Resources | What triggers the payout |
| --- | ---: | --- |
| Defeat the sector fleet | 1,000 | Account for every assigned ship through confirmed losses or a recorded rout. |
| Defeat an enemy patrol | 500 | Account for every ship assigned to that patrol through confirmed losses or a recorded rout. |
| Eliminate a submarine patrol | 500 | Confirm the loss of every submarine assigned to the patrol. |
| Intercept an enemy convoy | 500 | Confirm the loss of all assigned cargo ships before they escape or the deadline expires. Escorts are outside the objective count. |
| Escort allied cargo to safety | 750 | In Career, get at least one assigned cargo ship to the exit. In a standalone Scenario, meet the required share of starting cargo capacity (70% by default). Both use the objective deadline. |
| Capture and hold airfield | 750 | In Career, capture an airfield listed as an objective with infantry. In a standalone Scenario, take it and still control it when the round ends. |
| Clear a standalone coastal defence | 250 | Capture the listed site or confirm it has been put out of action. |
| Clear a Coastal Defences area | 250 × required bunkers | Capture or confirm the destruction of every required bunker. For three bunkers, the area pays 750 when the last one is cleared. |
| Disable an offshore fort | 1,000 | Disable both main turrets and both side casemates. The rooftop AA is outside the objective count. |

These are the standard generated objective values. The encounter assigns the actual objective and payout. Required status affects victory conditions.

## When the balance changes

- **During the battle.** Most payouts enter the available reinforcement balance as soon as the objective completes. Look for `Objective completed: +… resources` in the **Radio Log** and check the available balance under **Reinforcements**.
- **Standalone airfields.** The payout stays pending while you hold the airfield. Losing it before the end removes the pending reward. Recapturing it makes it eligible again. If you still hold it when the round ends, the payout goes into the battle's objective earnings. It cannot fund an earlier reinforcement request.
- **Career settlement.** Finishing the deployment banks your remaining balance and settled objective rewards for later sectors. The first victory that secures a sector also grants that sector's separate capture bonus. Generated careers set this bonus at 1,200–2,000 in steps of 100. A settled withdrawal preserves earned objective progress and the remaining balance. Surviving ships stay on your Career roster as fleet assets. A standalone Scenario has its own budget.
- **Reinforcement refunds.** Confirming a request charges its cost. Cancelling while it is still queued returns the amount paid. Queued orders are also refunded when the deployment ends or when an order's receiving airbase or carrier is lost before dispatch. A dispatched request is past the cancellation window.

## What has zero direct payout

Infantry, tank, aircraft, ship and AA kills have no per-kill resource bounty. A confirmed kill can advance an objective if the target is assigned to it. Radio tower capture gives visibility. Holding airfields generates no recurring player income. The airfield income rule for the enemy reserve is separate.

## Starting funds

In a **Scenario**, the fleet point budget funds the starting fleet and air wings. The unspent balance is available for reinforcements after deployment. In **Career**, the balance comes from the career bank after purchases. New generated careers start with 12,000 resources.

## Combat Recon purchases

Updated November 23, 2026 for Full Testing **2026.11.23.1-mainqa** (build **26869374**, source CL3266 / compiled CL3265). In an eligible Career sector, one Combat Recon request costs **450 resources for one aircraft**: P-38L for the U.S. or Ki-45 for Japan, using normal fighter flight dynamics. The earlier November 20 three-aircraft description belongs to that older release. Availability remains faction- and campaign-dependent. This is a purchase, not an objective payout or a per-kill reward. Read the current reinforcement quote before confirming.

See the [current player guide](player-guide-current.md) for the matching Steam build IDs and interface instructions. The objective payout values above retain their original dated scope.

## Mixed transport and cargo purchases

Current configured prices in Full Testing **2026.11.23.1-mainqa / 26869374**, source CL3266 with compiled transport CL3265:

| Hull or cargo package | Points / purchase quote |
| --- | ---: |
| Transport hull — three mixed slots | 600 |
| Large landing craft hull — two mixed slots | 450 |
| One amphibious tank — one slot | +150 |
| One amphibious supply truck — one slot | +100 |
| One troop truck with eight passengers — one slot | +180 |
| One infantry boat with twelve people — one slot | +170, including the boat hull once |

Configure each new hull before purchase/deployment or reinforcement confirmation. Only packages offered for that country are available. Deployment points limit the starting force; Career purchases and confirmed reinforcement orders debit their applicable resource balance. The checked quote includes hull and payload once. For example, a Transport with a tank, troop truck and infantry boat totals **1,100**; a Large landing craft with a supply truck and infantry boat totals **720**. These are current designer prices, not a promise that future balancing will retain them.

Small infantry boats are **granted or launched as actual paid cargo**, not sold as standalone new purchases. Amphibious Assault retains its two granted craft at 350 points each and the existing 4,050-point trial force within a 5,000-point budget; fresh infantry cohorts carry twelve people. The retained legacy troop transport also stages twelve per fresh boat. Already saved/active cohorts are not resized.

Owned cargo is read-only in the purchase controls. Launch, land and physically recover the same units to preserve their identities, crews, damage, fuel, ammunition and finite supplies; changing a count is not a resupply mechanism. Stop pending launch/landing operations before recovery. Amphibious vehicles must be within **80 m** to request boarding and then move to the bow; boats reserve a compatible free slot and return physically. A dispatched paid reinforcement transfers its existing cargo records without charging for them again.

The transport gameplay is live in the build above. Newly prepared handbook text describing it awaits a future compiled build; this web update does not rebuild the game or printable manual.

