import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import * as nav from '../src';

class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: nav.Identifier) {
    super(scope, id.stackName);
    console.log(id.stackName);
  }
}

class MyConstruct extends Construct {
  constructor(scope: Construct, id: nav.Identifier) {
    super(scope, id.constructName);
    new logs.LogGroup(this, 'LogGroup', {
      logGroupName: id.parent.slashName,
      retention: new nav.Context(this.node.tryGetContext('environment')).extract({
        development: cdk.Duration.days(1),
        production: cdk.Duration.days(7),
      }),
    });
    if (new nav.Context(this.node.tryGetContext('environment')).containsIn('development')) {
      // if (environment(this).containsIn('development')) {
      // only for development
    }
    if (new nav.Context(this.node.tryGetContext('environment')).containsInWithWarn('development')) {
      // Only development environment for now, but will be applied to other environments in the future.
    }
  }
}

function environment(c: Construct): nav.Context {
  return new nav.Context(c.node.tryGetContext('environment'));
}
