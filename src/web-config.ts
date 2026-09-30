import type { TextInteractionPluginConfig } from './definitions';

type CapacitorConfigShape = {
  plugins?: {
    TextInteraction?: TextInteractionPluginConfig;
  };
};

/**
 * Reads `plugins.TextInteraction` for the web implementation when embedded in the WebView.
 */
export function readTextInteractionWebConfig(): TextInteractionPluginConfig {
  if (typeof globalThis === 'undefined') {
    return {};
  }

  const globalConfig = globalThis as typeof globalThis & {
    CAPACITOR_CONFIG?: CapacitorConfigShape;
    __capacitorConfig?: CapacitorConfigShape;
  };

  return (
    globalConfig.CAPACITOR_CONFIG?.plugins?.TextInteraction ??
    globalConfig.__capacitorConfig?.plugins?.TextInteraction ??
    {}
  );
}

export const TEXT_INTERACTION_LOCKED_ERROR =
  'TextInteraction state is locked by config (plugins.TextInteraction.locked)';
