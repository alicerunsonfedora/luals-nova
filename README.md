**LuaLS** provides deep integration with **Lua** through the [Lua Language Server](https://luals.github.io/) project.

> **Important**  
> LuaLS for Nova is still a work in progress. I'm not sure whether this extension fully supports everything LuaLS has to offer, but it seems to work quite well with the projects I've tested. 

<!--
🎈 It can also be helpful to include a screenshot or GIF showing your extension in action:
-->

![](https://nova.app/images/en/dark/editor.png)

## Requirements

<!--
🎈 If your extension depends on external processes or tools that users will need to have, it's helpful to list those and provide links to their installers:
-->

LuaLS requires some additional tools to be installed on your Mac:

- [Lua Language Server](https://luals.github.io)

<!--
✨ Providing tips, tricks, or other guides for installing or configuring external dependencies can go a long way toward helping your users have a good setup experience:
-->

> To install the current stable version of Lua Language Server with Homebrew, run `brew install lua-language-server`.

## Usage

<!--
🎈 If your extension provides features that are invoked manually, consider describing those options for users:
-->

To run LuaLS:

- Select the **Editor → LuaLS** menu item; or
- Open the command palette and type `LuaLS`

<!--
🎈 Alternatively, if your extension runs automatically (as in the case of a validator), consider showing users what they can expect to see:
-->

LuaLS runs any time you open a local project, automatically lints all open files, then reports errors and warnings in Nova's **Issues** sidebar and the editor gutter:

![](https://nova.app/images/en/dark/tools/sidebars.png)

### Configuration

<!--
🎈 If your extension offers global- or workspace-scoped preferences, consider pointing users toward those settings. For example:
-->

To configure global preferences, open **Extensions → Extension Library...** then select LuaLS's **Preferences** tab.

You can also configure preferences on a per-project basis in **Project → Project Settings...**

<!--
👋 That's it! Happy developing!

P.S. If you'd like, you can remove these comments before submitting your extension 😉
-->
