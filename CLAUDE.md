# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo containing four independent Umbraco 17 property editor NuGet packages, each with a .NET backend (Razor Class Library) and a TypeScript/Lit frontend (Web Components):

- `AndrewK.Umbraco.Extensions.Dictionary` — Key-value pair property editor
- `AndrewK.Umbraco.Extensions.Dropdown` — Dropdown property editor
- `AndrewK.Umbraco.Extensions.CheckBoxList` — Checkbox list property editor
- `AndrewK.Umbraco.Extensions.RadioButtonList` — Radio button list property editor
- `AndrewK.Umbraco.Extensions.Example` — Local Umbraco 17 test app
- `AndrewK.Umbraco.Extensions.Tests` — xUnit backend tests
- `AndrewK.Umbraco.Extensions.Tests.Client` — Web Component tests

## Build Commands

### .NET Backend
```bash
dotnet build                      # Build solution
dotnet build --configuration Release
dotnet pack <project.csproj> --configuration Release --output ./nupkg
```

### TypeScript Frontend (from root)
```bash
npm ci                            # Install all workspace dependencies
npm run build                     # Build all client packages
npm run watch                     # Watch mode
npm run type-check                # TypeScript validation
npm run format                    # Prettier formatting
```

Each client package also supports `npm run dev` for local dev server.

## Testing

### .NET Tests (xUnit + Moq)
```bash
dotnet test                       # All tests
dotnet test AndrewK.Umbraco.Extensions.Tests/AndrewK.Umbraco.Extensions.Tests.csproj
dotnet test --logger trx --results-directory "TestResults"
```

### Client Tests (Web Test Runner + Playwright)
```bash
# From AndrewK.Umbraco.Extensions.Tests.Client/
npm test                          # All tests
npm run test:ci                   # CI mode (JUnit reporter)
npm run test:watch                # Watch mode
npm run test:dictionary           # Run only dictionary tests
npm run test:radio-button-list    # Run only radio button list tests
npm run test:chromium             # Specific browser
```

## Architecture

### Backend Pattern
Each package is a Razor Class Library (RCL) with a `PropertyValueConverters/` folder. Converters inherit from `PropertyValueConverterBase`, deserialize JSON via `IJsonSerializer`, and return strongly-typed collections (e.g., `ICollection<KeyValuePair<string, string>>`). Static web assets are served from `App_Plugins/AndrewK{FeatureName}`.

### Frontend Pattern
Web Components use Lit and extend `UmbLitElement`, implementing `UmbPropertyEditorUiElement`. They use `UmbFormControlMixin` for form state, `umbBindToValidation` for validation UI, and `UmbChangeEvent` for change notifications. Components consume `UMB_PROPERTY_CONTEXT` for Umbraco integration.

Dictionary has a three-level component hierarchy: `AkPropertyEditorUIDictionary` → `AkInputDictionary` → `AkInputDictionaryItem`.

### Build Pipeline
TypeScript → Vite → bundled into `wwwroot/` → included in NuGet package via RCL static assets.

### Centralized Configuration
- `Directory.Build.props` — Shared .NET settings (target `net10.0`, nullable enabled, implicit usings)
- `Directory.Packages.props` — Centralized NuGet package versions
- Root `package.json` — npm workspaces with shared dev dependencies

### Integration Tests
`ExampleWebApplicationFactory` creates an in-memory SQLite Umbraco instance. Tests use `SharedWebApplicationFactory` (shared fixture) with `IntegrationTestCollection` for parallel execution. Helper classes `DataTypeCreator` and `ContentTypeCreator` assist test setup.

## Versioning & Publishing
Packages are published to NuGet via GitHub Actions (`.github/workflows/publish-nuget.yml`) triggered by git tags. Each of the four packages has an independent version. Tests run in CI via `run-dotnet-tests.yml` and `run-client-tests.yml`.