/**
 * Web demo: mirror plugins.TextInteraction from capacitor.config.ts before the plugin loads.
 */
const textInteractionPluginConfig = {
  enabled: true,
  locked: false,
};

globalThis.CAPACITOR_CONFIG = {
  ...(globalThis.CAPACITOR_CONFIG ?? {}),
  plugins: {
    ...(globalThis.CAPACITOR_CONFIG?.plugins ?? {}),
    TextInteraction: textInteractionPluginConfig,
  },
};
