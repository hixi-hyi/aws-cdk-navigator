import { App } from 'aws-cdk-lib';
import { NagPack, NagPackSuppression } from 'cdk-nag';
export declare class Nag {
    static addAllStacks(app: App, pack: NagPack): void;
    static suppressAllStacks(app: App, suppression: NagPackSuppression): void;
}
