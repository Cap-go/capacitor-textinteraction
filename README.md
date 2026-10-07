# @capgo/capacitor-textinteraction

Turn text selection on or off in the WebView of your Capacitor iOS app, so it feels like a native app instead of a web page.

<a href="https://capgo.app/?ref=plugin_textinteraction"><img src="https://capgo.app/readme-banner.svg?repo=Cap-go/capacitor-textinteraction" alt="Capgo - Instant updates for Capacitor" /></a>

<div align="center">
  <p><b>Capgo</b>: open-source live updates for Ionic and Capacitor apps. Ship OTA fixes and features instantly, without waiting for app store review.</p>
  <h2><a href="https://capgo.app/register/?ref=plugin_textinteraction">➡️ Get started for free</a></h2>
  <p>14-day unlimited free trial. No credit card required</p>
  <p><a href="https://capgo.app/consulting/?ref=plugin_textinteraction">Missing a feature? We'll build the plugin for you 💪</a></p>
</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/Cap-go/capacitor-textinteraction/main/assets/github-social-preview.png" alt="@capgo/capacitor-textinteraction for Capacitor apps" width="300" />
</p>

## Key features

- **One call**: `toggle()` enables or disables text interaction.
- **Native feel**: stops long-press text selection when disabled.
- **WebKit based**: uses the WKWebView text interaction setting on iOS.
- **Reversible**: turn it back on for screens with editable or copyable text.
- **Platforms**: iOS. iOS only. Android and web are not supported.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/textinteraction/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use the version that matches your Capacitor installation (e.g., plugin v8 for Capacitor 8). Only the latest major version is actively maintained.

## Install

You can use our AI-Assisted Setup to install the plugin. Add the Capgo skills to your AI tool using the following command:

```bash
npx skills add https://github.com/cap-go/capacitor-skills --skill capacitor-plugins
```

Then use the following prompt:

```text
Use the `capacitor-plugins` skill from `cap-go/capacitor-skills` to install the `@capgo/capacitor-textinteraction` plugin in my project.
```

If you prefer Manual Setup, install the plugin by running the following commands and follow the platform-specific instructions below:

```bash
npm install @capgo/capacitor-textinteraction
npx cap sync
```

## Usage

```ts
import { TextInteraction } from '@capgo/capacitor-textinteraction';

// Disable the iOS magnifier lens while the WebView is visible
await TextInteraction.toggle({ enabled: false });

// Remember to re-enable before presenting any text inputs
await TextInteraction.toggle({ enabled: true });
```

## API

<docgen-index>

* [`toggle(...)`](#toggle)
* [`getPluginVersion()`](#getpluginversion)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### toggle(...)

```typescript
toggle(options: TextInteractionOptions) => Promise<TextInteractionResult>
```

Toggle text interaction (selection) on the Capacitor WebView.

⚠️ Disabling text interaction prevents all text input controls from working while disabled.
Use it sparingly and re-enable when text entry is required.

iOS only.

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#textinteractionoptions">TextInteractionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#textinteractionresult">TextInteractionResult</a>&gt;</code>

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

--------------------


### Interfaces


#### TextInteractionResult

| Prop          | Type                 | Description                                                                                      |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------ |
| **`success`** | <code>boolean</code> | `true` when the platform supports toggling text interaction (iOS &gt;= 14.5), otherwise `false`. |

| Method               | Signature                                    | Description                             |
| -------------------- | -------------------------------------------- | --------------------------------------- |
| **getPluginVersion** | () =&gt; Promise&lt;{ version: string; }&gt; | Get the native Capacitor plugin version |


#### TextInteractionOptions

| Prop          | Type                 | Description                                                                                                          |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **`enabled`** | <code>boolean</code> | Whether text interaction should be enabled or disabled. Disabling hides the magnifier lens reintroduced with iOS 15. |

</docgen-api>

### Credits 

This plugin was inspired by the work of https://github.com/astrocreep/capacitor-plugins/tree/main/packages/textinteraction
