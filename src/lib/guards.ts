type Mode = Environment.Configuration['MODE'];
const modes: Mode[] = [
  'production',
  'develop',
  'test',
];

/**
 * Provided mode is a valid environment.
 *
 * @param mode
 */
export function isValidEnvironment(mode: string): mode is Mode {
  return modes.includes(mode as Mode);
}
