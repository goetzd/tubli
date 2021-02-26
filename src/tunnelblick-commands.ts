import * as shell from 'shelljs'
import {config} from 'shelljs'

config.silent = true

export enum TunnelblickCommand {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  STATE_OF_ALL_CONFIGURATIONS = 'get state of configurations',
}

export function executeTunnelblick(command: TunnelblickCommand, parameters = ''): string {
  const output = shell.exec(`osascript -e "tell application \\"/Applications/Tunnelblick.app\\"" -e "${command} ${parameters}" -e "end tell"`).stdout

  if (output.endsWith('\n')) {
    return output.substr(0, output.length - 1)
  }

  return output
}

async function sleep(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

export async function waitUntil(command: () => string, expectedOutput: RegExp) {
  let result = command()
  while (!expectedOutput.test(result)) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(1000)
    result = command()
  }
}
