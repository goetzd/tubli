tubli
=====

A simple command line interface for the open source OpenVPN client [Tunnelblick](https://tunnelblick.net/) for macOS. It uses AppleScript to interact with Tunnelblick (see [Tunnelblick documentation](https://tunnelblick.net/cAppleScriptSupport.html)).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tubli.svg)](https://npmjs.org/package/tubli)
[![Downloads/week](https://img.shields.io/npm/dw/tubli.svg)](https://npmjs.org/package/tubli)
[![License](https://img.shields.io/npm/l/tubli.svg)](https://github.com/goetzd/tubli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tubli
$ tubli COMMAND
running command...
$ tubli (-v|--version|version)
tubli/0.0.1 darwin-x64 node-v14.15.1
$ tubli --help [COMMAND]
USAGE
  $ tubli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tubli connect [VPN]`](#tubli-connect-vpn)
* [`tubli disconnect [VPN]`](#tubli-disconnect-vpn)
* [`tubli help [COMMAND]`](#tubli-help-command)

## `tubli connect [VPN]`

connects to existing VPN configurations

```
USAGE
  $ tubli connect [VPN]

OPTIONS
  -a, --all   connect all configurations
  -h, --help  show CLI help

EXAMPLES
  $ shaft connect "MyShinyVPN"
  $ shaft connect --all
```

_See code: [src/commands/connect.ts](https://github.com/goetzd/tubli/blob/v0.0.1/src/commands/connect.ts)_

## `tubli disconnect [VPN]`

disconnects active VPN sessions

```
USAGE
  $ tubli disconnect [VPN]

OPTIONS
  -a, --all      disconnect all configurations
  -h, --help     show CLI help
  -n, --no-wait  do not wait until disconnect is successful
  -q, --quiet    mute all output

EXAMPLES
  $ shaft disconnect "MyShinyVPN"
  $ shaft disconnect --all
```

_See code: [src/commands/disconnect.ts](https://github.com/goetzd/tubli/blob/v0.0.1/src/commands/disconnect.ts)_

## `tubli help [COMMAND]`

display help for tubli

```
USAGE
  $ tubli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
