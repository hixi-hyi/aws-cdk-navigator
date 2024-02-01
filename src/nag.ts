import { App, Stack, Aspects } from 'aws-cdk-lib';
import { NagPack, NagPackSuppression, NagSuppressions } from 'cdk-nag';
export class Nag {
  public static addAllStacks(app: App, pack: NagPack) {
    const stacks = app.node.children.filter((child): child is Stack => Stack.isStack(child));
    for (const stack of stacks) {
      Aspects.of(stack).add(pack);
    }
  }
  public static suppressAllStacks(app: App, suppression: NagPackSuppression) {
    const stacks = app.node.children.filter((child): child is Stack => Stack.isStack(child));
    for (const stack of stacks) {
      NagSuppressions.addStackSuppressions(stack, [suppression]);
    }
  }
}
