# @cairul/vitest-plugin

Cairul checks for vitest. See the [integration catalog](https://github.com/cairul-hq/cairul/blob/main/packages/README.md) for available checks and configuration.

Install in your Cairul project with `npm install @cairul/vitest-plugin`. Add this entry to `.cairul/plugins.yaml` and restart the MCP.

```yaml
plugins:
  - package: '@cairul/vitest-plugin'
```

Run `npm install`, `npm run build`, and `npm test` to develop locally. CI uses a pinned copy of the Cairul PDK until a compatible version is on npm. Release Please opens release PRs using `RELEASE_PLEASE_TOKEN`. A successful CI run after merging a release PR triggers npm publication with provenance using GitHub OIDC. Configure `release.yaml` and environment `npm` in the package’s npm trusted publisher settings.
