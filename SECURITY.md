# Security Notice

## Current Vulnerabilities

As of January 2026, this plugin has the following security vulnerabilities in its dependencies:

### Critical (1)
- **dompurify** (<=3.2.3): Prototype pollution and XSS vulnerabilities
  - Affects: @logseq/libs dependency
  - Advisory: GHSA-mmhx-hmjr-r674, GHSA-vhxf-7vqr-mrjg, GHSA-p3vf-v8qc-cwcr, GHSA-gx9m-whjm-85jf

### High (1)
- **esbuild** (<=0.24.2): Development server security issue
  - Affects: vite dependency
  - Advisory: GHSA-67mh-4wv8-2f99

### Moderate (3)
- **lodash-es** (4.0.0 - 4.17.22): Prototype pollution
  - Affects: @logseq/libs dependency
  - Advisory: GHSA-xxjr-mmjv-4gpg

## Risk Assessment

### Impact on Plugin Users
- **Low Risk**: These vulnerabilities primarily affect:
  - Development environments (esbuild)
  - Server-side rendering scenarios
  - Web applications with user-generated content
  
- **Mitigating Factors**:
  - Plugin runs in Logseq's sandboxed environment
  - No server-side component
  - Limited user input processing
  - Local file operations only

### Recommended Action

#### For Users
1. **Continue using the plugin**: The risk is minimal for typical use cases
2. **Monitor for updates**: Check for plugin updates regularly
3. **Report issues**: If you notice any security concerns, report them immediately

#### For Developers
1. **Monitor dependency updates**: Check for compatible security fixes
2. **Test before upgrading**: Ensure new versions don't break Logseq compatibility
3. **Consider alternatives**: If vulnerabilities become critical, consider alternative approaches

## Update Status

### Current Dependencies
- `@logseq/libs`: 0.0.15 (latest compatible with Logseq v0.9.x)
- `vite`: 4.5.14 (compatible with current build system)

### Update Constraints
- **Logseq Compatibility**: Must maintain compatibility with Logseq v0.9.x
- **API Stability**: @logseq/libs API may change between major versions
- **Build System**: Vite updates may require configuration changes

## Security Best Practices

### For Plugin Users
1. **Keep Logseq updated**: Use the latest stable version of Logseq
2. **Regular backups**: Backup your Logseq graph regularly
3. **Monitor activity**: Report any unusual plugin behavior
4. **Use trusted sources**: Only install plugins from trusted repositories

### For Plugin Development
1. **Input validation**: All user input is validated
2. **Sandboxed execution**: Plugin runs in Logseq's secure environment
3. **Minimal permissions**: Plugin only accesses necessary APIs
4. **Regular audits**: Dependencies are monitored for security updates

## Contact

Report security issues to:
- GitHub Issues: https://github.com/monch1962/logseq-zettel/issues
- Email: [Your contact email]

## References
- [npm audit report](https://docs.npmjs.com/cli/v10/commands/npm-audit)
- [Logseq Plugin Security](https://docs.logseq.com/#/page/plugins/security)
- [GitHub Security Advisories](https://github.com/advisories)