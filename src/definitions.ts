export interface TextInteractionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
