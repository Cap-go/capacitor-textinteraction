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

  /**
   * Get the native Capacitor plugin version
   *
   * @returns {Promise<{ id: string }>} an Promise with version for this device
   * @throws An error if the something went wrong
   */
  getPluginVersion(): Promise<{ version: string }>;
}
