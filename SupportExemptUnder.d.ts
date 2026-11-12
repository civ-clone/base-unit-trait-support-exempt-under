import { IConstructor } from '@civ-clone/core-registry/Registry';
import UnitTrait from '@civ-clone/core-unit/UnitTrait';
/**
 * Costs its city no support while its player's government is one of `governments` (government classes, passed as
 *  constructors so this needs no government package).
 */
export declare class SupportExemptUnder extends UnitTrait {
  readonly governments: readonly IConstructor[];
  constructor(...governments: IConstructor[]);
}
export default SupportExemptUnder;
