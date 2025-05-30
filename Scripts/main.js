var langserver = null;

exports.activate = function () {
  // Do work when the extension is activated
  langserver = new LuaLanguageServer();
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
  if (langserver) {
    langserver.deactivate();
    langserver = null;
  }
};

class LuaLanguageServer {
  constructor() {
    // Observe the configuration setting for the server's location, and restart the server on change
    nova.config.observe(
      "luals.language-server-path",
      function (path) {
        this.lsPath = path;
        this.start();
      },
      this,
    );

    nova.workspace.config.observe(
      "luals.workspace.config-file",
      function (configPath) {
        this.configPath = configPath;
        this.start();
      },
      this,
    );
  }

  deactivate() {
    this.stop();
  }

  start() {
    if (this.languageClient) {
      this.languageClient.stop();
      nova.subscriptions.remove(this.languageClient);
    }

    // Use the default server path
    if (!this.lsPath) {
      this.lsPath = "/opt/homebrew/bin/lua-language-server";
    }

    // Create the client
    var serverOptions = {
      path: this.lsPath,
    };

    if (this.configPath) {
      serverOptions.args = [`--configpath=${this.configPath}`];
    }

    var clientOptions = {
      // The set of document syntaxes for which the server is valid
      syntaxes: ["lua"],
    };
    var client = new LanguageClient(
      "lua",
      "Lua Language Server",
      serverOptions,
      clientOptions,
    );

    try {
      // Start the client
      client.start();

      // Add the client to the subscriptions to be cleaned up
      nova.subscriptions.add(client);
      this.languageClient = client;
    } catch (err) {
      // If the .start() method throws, it's likely because the path to the language server is invalid

      if (nova.inDevMode()) {
        console.error(err);
      }
    }
  }

  stop() {
    if (this.languageClient) {
      this.languageClient.stop();
      nova.subscriptions.remove(this.languageClient);
      this.languageClient = null;
    }
  }
}
