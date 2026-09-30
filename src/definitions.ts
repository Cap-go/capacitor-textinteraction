/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    /**
     * Text interaction plugin configuration.
     */
    TextInteraction?: TextInteractionPluginConfig;
  }
}

/**
 * Capacitor config for `plugins.TextInteraction`.
 *
 * @since 8.0.41
 */
export interface TextInteractionPluginConfig {
  /**
   * When `false`, text interaction is disabled when the app starts.
   *
   * @default true
   * @since 8.0.41
   */
  enabled?: boolean;

  /**
   * When `true`, {@link TextInteractionPlugin.toggle} rejects at runtime and the state
   * can only be controlled via config.
   *
   * @default false
   * @since 8.0.41
   */
  locked?: boolean;
}

export interface TextInteractionPlugin {
  /**
   * Toggle text interaction (selection) on the Capacitor WebView.
   *
   * ⚠️ Disabling text interaction prevents all text input controls from working while disabled.
   * Use it sparingly and re-enable when text entry is required.
   *
   * iOS only.
   */
  toggle(options: TextInteractionOptions): Promise<TextInteractionResult>;

  /**
   * Returns whether text interaction is currently enabled.
   *
   * @since 8.0.41
   */
  isEnabled(): Promise<TextInteractionEnabledResult>;

  /**
   * Get the native Capacitor plugin version
   *
   * @returns {Promise<{ id: string }>} an Promise with version for this device
   * @throws An error if the something went wrong
   */
  getPluginVersion(): Promise<{ version: string }>;
}

export interface TextInteractionOptions {
  /**
   * Whether text interaction should be enabled or disabled. Disabling hides the
   * magnifier lens reintroduced with iOS 15.
   */
  enabled: boolean;
}

export interface TextInteractionResult {
  /**
   * `true` when the platform supports toggling text interaction (iOS >= 14.5), otherwise `false`.
   */
  success: boolean;
}

/**
 * @since 8.0.41
 */
export interface TextInteractionEnabledResult {
  /**
   * Whether text interaction is currently enabled.
   */
  enabled: boolean;
}
