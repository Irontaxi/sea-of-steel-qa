# Human co-op retest · November 20, 2026

The human tester reported these outcomes.

- Connection worked.
- Aircraft were visible.
- Controls and handoffs worked.
- Opening and closing menus paused and resumed correctly.

The tester confirmed Full Testing 26801550 and Demo Default 26801533, version 2026.11.19.3-sortieqa. Matching basic connection, ship control, aircraft visibility and repeated host-menu pause checks are retired from that paired checklist. Audio, voice, reconnect, shared fog, pings and other detailed scenarios remain open.

## Intermittent presentation failure after Alt-Tab

The HOST PC Alt-Tabbed. After the host returned, the client never recovered its live aircraft, command feedback or visual updates. The guest stayed connected, assigned and able to issue commands, and the host continued to see normal command outcomes. Record this as a presentation resume failure. A transport disconnect was not reported.

For reproduction, capture host focus loss and return timing, visible clock and flight state on both screens, and whether subsequent guest commands still execute on the host. Keep private logs and traces out of public reports.

## Retired checklist rows

- Passed · Q435 · Update both games and restart. Full host Testing 26801550 and Demo guest Default 26801533 must both show 2026.11.19.3-sortieqa. Create a fresh lobby and assign a moving ship to the guest.
- Passed · Q435 · Before opening any menus, verify the guest clock advances and its ship executes an order.
- Passed · Q435 · Open host Settings with F6. Verify both sides pause. Close Settings. Verify both clocks and ships resume without the guest rejoining.
- Passed · Q435 · Repeat host Settings, Escape/menu and normal pause/resume paths several times. Record any guest frozen clock or accepted order that never executes.
- Passed · Q435 · Only after movement recovers reliably, proceed with aircraft, game audio, VOIP, land orders, pings and reconnect checks below.
- Passed · Q435 · Update both Steam games and restart. Laptop Full host must show Testing 26801550; this-PC Demo guest must show Default 26801533. Both display 2026.11.19.3-sortieqa.
- Passed · Q352 · Aircraft before handoff · Previously failed. As host, launch a ten-fighter CAP from the host-owned carrier and wait for takeoff. In Tactical View compare both screens over the same water. Record guest flight marker and rendered aircraft model visibility separately.
- Passed · Q352 · Guest aircraft display · Reported failure: the demo guest did not see aircraft, including flights launched by the guest. After carrier handoff, issue a flight as guest. Compare the same airspace on both clients and report missing rendered aircraft and flight markers separately.
