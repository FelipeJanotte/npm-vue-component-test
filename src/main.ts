import { App } from "vue";

export interface CrmChatComponentsOptions {
  useUtil: boolean;
  useCrmChatEnum: boolean;
}

export default {
  install(app: App, options: CrmChatComponentsOptions) {
    if (options.useUtil) {
      app.config.globalProperties.$util = {};
    }

    if (options.useCrmChatEnum) {
      app.config.globalProperties.$enum = {};
    }

    this.installComponents(app);
  },
  installComponents(app: App) {
    app.component("HelloWorld", require("./components/HelloWorld").default);
  },
};
