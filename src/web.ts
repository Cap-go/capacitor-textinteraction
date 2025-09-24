import { WebPlugin } from '@capacitor/core';

import type { TextInteractionPlugin } from './definitions';

export class TextInteractionWeb extends WebPlugin implements TextInteractionPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
