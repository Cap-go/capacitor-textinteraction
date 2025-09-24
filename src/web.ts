import { WebPlugin } from '@capacitor/core';

import type { TextInteractionPlugin, TextInteractionOptions, TextInteractionResult } from './definitions';

export class TextInteractionWeb extends WebPlugin implements TextInteractionPlugin {
  async toggle(_options: TextInteractionOptions): Promise<TextInteractionResult> {
    throw this.unimplemented('TextInteraction.toggle is not available on web');
  }
}
