import {executeTunnelblick, TunnelblickCommand, waitUntil} from '../tunnelblick-commands'
import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'

export default class Disconnect extends Command {
  static description = 'disconnects active VPN sessions'

  static examples = [
    '$ shaft disconnect "MyShinyVPN"',
    '$ shaft disconnect --all',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    all: flags.boolean({
      char: 'a',
      description: 'disconnect all configurations',
      default: false,
    }),
    'no-wait': flags.boolean({
      char: 'n',
      description: 'do not wait until disconnect is successful',
      default: false,
    }),
    quiet: flags.boolean({
      char: 'q',
      description: 'mute all output',
      default: false,
    }),
  }

  static args = [{name: 'vpn'}]

  async disconnectTunnelblick(vpn: string, wait: boolean, quiet: boolean) {
    executeTunnelblick(TunnelblickCommand.DISCONNECT, vpn)
    if (wait) {
      if (!quiet) {
        await cli.action.start('⏳ Waiting for disconnect to finish...')
      }
      await waitUntil(() => executeTunnelblick(TunnelblickCommand.STATE_OF_ALL_CONFIGURATIONS), /^(EXITING(, )?)+$/)
      if (!quiet) {
        await cli.action.stop('✔ disconnected.')
      }
    }
  }

  async run() {
    const {args, flags} = this.parse(Disconnect)

    if (flags.all && args.vpn !== undefined) {
      this.error('Cannot specify --all and VPN configuration name at the same time!')
    }

    if (!flags.all && args.vpn === undefined) {
      this.error('Must specify a VPN configuration or use flag --all!')
    }

    const configuration = flags.all ? 'all' : `\\"${args.vpn}\\"`
    await this.disconnectTunnelblick(configuration, !flags['no-wait'], flags.quiet)
  }
}
