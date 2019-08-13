#!/usr/bin/env node
'use strict';

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.join(__dirname, '../node_modules/commitizen'),
  config: {
    "path": "@endemolshinegroup/cz-jira-smart-commit",
    "@endemolshinegroup/cz-jira-smart-commit": {
      "scopes": {
        "subscription": "For payment/subscription commits",
        "gnet": "For integrations commits",
        "bi": "For BI commits",
        "simulation": "For portfolio simulation commits",
        "cash": "For cash commits",
        "tradesync": "For tradesync services commits",
        "wallet": "For wallet commits",
        "pu": "For unit portfolio related commits",
        "timeline": "For timeline front commits",
        "report": "For webapp report related commits",
        "blotter": "For blotter related commits",
        "events": "For portfolio events commits",
        "auth": "For user auth related commits",
        "advisor": "For advisor area and services commits",
        "profit": "For profit related commits",
        "benchmarks": "For benchmarks related commits",
        "ui": "For UI related commits",
        "transfer": "For asset transfer service commits",
        "tools": "For tooling commits",
        "etl": "For etl commits"
      }
    }
  }
});
