import { IConstructor } from '@civ-clone/core-registry/Registry';
import UnitTrait from '@civ-clone/core-unit/UnitTrait';

/**
 * Costs its city no support while its player's government is one of `governments` (government classes, passed as
 *  constructors so this needs no government package).
 */
export class SupportExemptUnder extends UnitTrait {
  readonly governments: readonly IConstructor[];

  constructor(...governments: IConstructor[]) {
    super();

    this.governments = Object.freeze([...governments]);
  }
}

export default SupportExemptUnder;
