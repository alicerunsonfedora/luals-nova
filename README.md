**LuaLS** provides deep integration with **Lua** through the [Lua Language Server](https://luals.github.io/) project.

> **⚠️ Disclaimer**  
> This extension is not officially maintained or endorsed by the LuaLS project. Should you run into any issues with this extension, please file bug reports and feature requests on this project's page.

![Nova screenshot with LuaLS enabled](https://github.com/alicerunsonfedora/luals-nova/raw/main/screenshot.png)

## Requirements

LuaLS requires some additional tools to be installed on your Mac:

- [Lua Language Server](https://luals.github.io)

> To install the current stable version of Lua Language Server with Homebrew, run `brew install lua-language-server`.

## Usage

LuaLS runs any time you open a local project, automatically lints all open files, then reports errors and warnings in Nova's **Issues** sidebar and the editor gutter.


### Configuration

To configure global preferences, open **Extensions → Extension Library...** then select LuaLS's **Preferences** tab.

Likewise, you can write a custom `.luarc.json` file in your local project to control the behaviors of LuaLS. Or, if you have a custom configuration file, you can open your Workspace settings to configure LuaLS with it.

[Configure LuaLS &rsaquo;](https://luals.github.io/wiki/configuration/)
