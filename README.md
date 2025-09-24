# @capgo/capacitor-textinteraction
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>
Toggle text interaction in Capacitor based iOS apps.

## Install

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


### Interfaces


#### TextInteractionResult

| Prop          | Type                 | Description                                                                                      |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------ |
| **`success`** | <code>boolean</code> | `true` when the platform supports toggling text interaction (iOS &gt;= 14.5), otherwise `false`. |


#### TextInteractionOptions

| Prop          | Type                 | Description                                                                                                          |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **`enabled`** | <code>boolean</code> | Whether text interaction should be enabled or disabled. Disabling hides the magnifier lens reintroduced with iOS 15. |

</docgen-api>

### Credits 

This plugin was inspired by the work of https://github.com/astrocreep/capacitor-plugins/tree/main/packages/textinteraction
