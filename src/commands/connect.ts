import {Command, flags} from '@oclif/command'
import {executeTunnelblick, TunnelblickCommand} from '../tunnelblick-commands'

export default class Connect extends Command {
  static description = 'connects to existing VPN configurations'

  static examples = [
    '$ shaft connect "MyShinyVPN"',
    '$ shaft connect --all',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    all: flags.boolean({
      char: 'a',
      description: 'connect all configurations',
      default: false,
    }),
  }

  static args = [{name: 'vpn'}]

  async run() {
    const {args, flags} = this.parse(Connect)

    if (flags.all && args.vpn !== undefined) {
      this.error('Cannot specify --all and VPN configuration name at the same time!')
    }

    if (!flags.all && args.vpn === undefined) {
      this.error('Must specify a VPN configuration or use flag --all!')
    }

    const configuration = flags.all ? 'all' : `\\"${args.vpn}\\"`

    await executeTunnelblick(TunnelblickCommand.CONNECT, configuration)
  }
}
