# base-unit-trait-support-exempt-under

The `SupportExemptUnder` unit trait: a unit type with it needs no support under some governments.

A unit type with this trait costs its city no support while its player's government is one of `governments`.

For example: Civ2: flag 11 (Fanatics under Fundamentalism).

A game declares which of its unit classes have the trait with `UnitTraits` rules from `@civ-clone/core-unit`, and its
rules ask `unit.hasTrait(SupportExemptUnder)`:

```ts
import SupportExemptUnder from '@civ-clone/base-unit-trait-support-exempt-under/SupportExemptUnder';
import { unitTraits } from '@civ-clone/core-unit/Rules/UnitTraits';

ruleRegistry.register(...unitTraits('civ2-unit:unit/trait', Fanatics, new SupportExemptUnder(Fundamentalism)));
```

A rule that needs its parameters reads the traits themselves: `unit.traits(SupportExemptUnder)` for a unit, or
`traitsOf(UnitClass, SupportExemptUnder, ruleRegistry)` (from `@civ-clone/core-unit/traits`) for a class. A type may be declared
with more than one:

```ts
unit.traits(SupportExemptUnder).some((trait: SupportExemptUnder): boolean =>
  trait.governments.some((Government) => government instanceof Government)
);
```

Part of the unit traits design (civ-clone/web-renderer#1008).
