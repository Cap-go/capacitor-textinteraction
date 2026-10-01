import { CapacitorException, WebPlugin } from '@capacitor/core';

import type {
  TextInteractionPlugin,
  TextInteractionOptions,
  TextInteractionResult,
  TextInteractionEnabledResult,
} from './definitions';
import { readTextInteractionWebConfig, TEXT_INTERACTION_LOCKED_ERROR } from './web-config';

export class TextInteractionWeb extends WebPlugin implements TextInteractionPlugin {
  private enabled: boolean;
  private readonly locked: boolean;

  constructor() {
    super();
    const config = readTextInteractionWebConfig();
    this.enabled = config.enabled ?? true;
    this.locked = config.locked ?? false;
  }

  async isEnabled(): Promise<TextInteractionEnabledResult> {
    return { enabled: this.enabled };
  }

  async toggle(_options: TextInteractionOptions): Promise<TextInteractionResult> {
    if (this.locked) {
      throw new CapacitorException(TEXT_INTERACTION_LOCKED_ERROR);
    }
    throw this.unimplemented('TextInteraction.toggle is not available on web');
  }

  async getPluginVersion(): Promise<{ version: string }> {
    return { version: 'web' };
  }
}
