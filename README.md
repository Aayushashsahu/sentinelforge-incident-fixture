# SentinelForge Incident Fixture

This repository intentionally contains a reproducible release manifest version mismatch for SentinelForge incident-response testing.

`package.json` declares version `1.4.0`, while `release-manifest.json` declares `1.3.0`. Run the deterministic, offline check with:

```bash
npm test
```

The expected initial result is a failure that reports the two version values. The smallest safe repair is to make `release-manifest.json` match `package.json`. This fixture contains no secrets, destructive actions, or network-dependent test code.
