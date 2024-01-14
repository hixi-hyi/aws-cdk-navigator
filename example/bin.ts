#!/usr/bin/env node
import * as nav from '../src';
import * as cdk from 'aws-cdk-lib';
import { Stack } from './class';

const app = new cdk.App();
const environment = new nav.Context(process.env.CDK_DEFAULT_ACCOUNT).extract({
  '123456789012': 'development',
  '987654321098': 'production',
}).value;
app.node.setContext('environment', environment);
app.node.setContext('account', process.env.CDK_DEFAULT_ACCOUNT);
app.node.setContext('region', process.env.CDK_DEFAULT_REGION);

const bd = new nav.Builder();

/* simple */
new Stack(app, bd.id('service', 'common', 'datastore'));
new Stack(app, bd.id('service', 'common', 'domain'));
new Stack(app, bd.id('service', 'tenant1', 'api'));
new Stack(app, bd.id('service', 'tenant1', 'batch'));
/* scope */
bd.scope('service', (bd) => {
  bd.scope('common', (bd) => {
    bd.scope('datastore', (bd) => {
      new Stack(app, bd.id('datastore'));
      new Stack(app, bd.id('domain'));
    });
  });
  bd.scope('service', (bd) => {
    bd.scope('tenant1', (bd) => {
      new Stack(app, bd.id('api'));
      new Stack(app, bd.id('batch'));
    });
  });
});
