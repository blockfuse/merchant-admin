System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.2.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-templating": "npm:aurelia-templating@1.7.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "npm:bootstrap@4.0.0",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "json": "github:systemjs/plugin-json@0.3.0",
    "moment": "npm:moment@2.22.2",
    "text": "github:systemjs/plugin-text@0.0.8",
    "toastr": "github:CodeSeven/toastr@2.1.4",
    "github:CodeSeven/toastr@2.1.4": {
      "css": "github:systemjs/plugin-css@0.1.37",
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-binding@1.7.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.7.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-http-client@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating@1.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap@4.0.0": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.4.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.37"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "aurelia.js": [
      "github:HubSpot/tether@1.4.3.js",
      "github:HubSpot/tether@1.4.3/js/tether.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.7.1.js",
      "npm:aurelia-binding@1.7.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.js",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-http-client@1.2.1.js",
      "npm:aurelia-http-client@1.2.1/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.4.0.js",
      "npm:aurelia-logging@1.4.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.7.0.js",
      "npm:aurelia-pal@1.7.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.6.js",
      "npm:aurelia-router@1.0.6/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.1.js",
      "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.7.0.js",
      "npm:aurelia-templating@1.7.0/aurelia-templating.js",
      "npm:bootstrap@4.0.0.js",
      "npm:bootstrap@4.0.0/dist/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:bootstrap@4.0.0/dist/js/bootstrap.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "components/assign-to-merchant.js",
      "components/channels-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/channels-list.js",
      "components/connect-to-gateway.html!github:systemjs/plugin-text@0.0.8.js",
      "components/connect-to-gateway.js",
      "components/create-invoice.html!github:systemjs/plugin-text@0.0.8.js",
      "components/create-invoice.js",
      "components/create-merchant.html!github:systemjs/plugin-text@0.0.8.js",
      "components/create-merchant.js",
      "components/create-user.html!github:systemjs/plugin-text@0.0.8.js",
      "components/create-user.js",
      "components/display-balance.html!github:systemjs/plugin-text@0.0.8.js",
      "components/display-balance.js",
      "components/invoices-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/invoices-list.js",
      "components/merchant-details.html!github:systemjs/plugin-text@0.0.8.js",
      "components/merchant-details.js",
      "components/merchants-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/merchants-list.js",
      "components/nav/header-panel.html!github:systemjs/plugin-text@0.0.8.js",
      "components/nav/header-panel.js",
      "components/nav/nav-panel.html!github:systemjs/plugin-text@0.0.8.js",
      "components/nav/nav-panel.js",
      "components/network-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/network-info.js",
      "components/open-channel.html!github:systemjs/plugin-text@0.0.8.js",
      "components/open-channel.js",
      "components/peer-node-details.html!github:systemjs/plugin-text@0.0.8.js",
      "components/peer-node-details.js",
      "components/peers-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/peers-list.js",
      "components/users-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/users-list.js",
      "components/wallet-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/wallet-info.js",
      "main.js",
      "models/address.js",
      "models/balance.js",
      "models/channel.js",
      "models/gateway-invoice.js",
      "models/invoice.js",
      "models/merchant.js",
      "models/network-info.js",
      "models/node-info.js",
      "models/order-response.js",
      "models/order.js",
      "models/peer.js",
      "models/toast-message.js",
      "models/user.js",
      "models/wallet-info.js",
      "resources/value-converters/currency-symbol-with-value.js",
      "resources/value-converters/currency-symbol.js",
      "resources/value-converters/date-time-format.js",
      "resources/value-converters/sats-to-btc.js",
      "resources/value-converters/value-in-usd.js",
      "routes/accounts/login.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/accounts/login.js",
      "routes/accounts/register.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/accounts/register.js",
      "routes/channels/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/index.js",
      "routes/channels/routes/details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/routes/details.js",
      "routes/channels/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/routes/list.js",
      "routes/gateway-invoices/components/display-gateway-invoice.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/gateway-invoices/components/display-gateway-invoice.js",
      "routes/gateway-invoices/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/gateway-invoices/index.js",
      "routes/gateway-invoices/routes/details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/gateway-invoices/routes/details.js",
      "routes/gateway-invoices/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/gateway-invoices/routes/list.js",
      "routes/history/components/transactions-list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/history/components/transactions-list.js",
      "routes/history/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/history/index.js",
      "routes/home/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/home/index.js",
      "routes/invoices/components/display-invoice.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/components/display-invoice.js",
      "routes/invoices/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/index.js",
      "routes/invoices/routes/create.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/routes/create.js",
      "routes/invoices/routes/details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/routes/details.js",
      "routes/invoices/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/routes/list.js",
      "routes/merchants/details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/merchants/details.js",
      "routes/peers/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/peers/index.js",
      "routes/peers/routes/details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/peers/routes/details.js",
      "routes/peers/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/peers/routes/list.js",
      "routes/users/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/users/index.js",
      "routes/users/routes/details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/users/routes/details.js",
      "routes/users/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/users/routes/list.js",
      "routes/wallet/components/display-address.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/components/display-address.js",
      "routes/wallet/components/pay-invoice.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/components/pay-invoice.js",
      "routes/wallet/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/index.js",
      "routes/wallet/routes/gateway.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/routes/gateway.js",
      "routes/wallet/routes/manage.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/routes/manage.js",
      "routes/wallet/routes/pay.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/routes/pay.js",
      "routes/wallet/routes/receive.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/wallet/routes/receive.js",
      "services/addresses.js",
      "services/balances.js",
      "services/channels.js",
      "services/data-store.js",
      "services/gateway-invoices.js",
      "services/http-wrapper.js",
      "services/invoices.js",
      "services/merchants.js",
      "services/node-info.js",
      "services/peers.js",
      "services/toast-messages.js",
      "services/users.js",
      "services/web-sockets.js"
    ]
  },
  depCache: {
    "app.js": [
      "services/users",
      "services/data-store",
      "services/peers",
      "services/merchants",
      "services/channels",
      "services/web-sockets",
      "services/toast-messages"
    ],
    "components/assign-to-merchant.js": [
      "aurelia-templating",
      "services/users",
      "services/data-store",
      "models/user"
    ],
    "components/channels-list.js": [
      "aurelia-templating"
    ],
    "components/connect-to-gateway.js": [
      "aurelia-templating",
      "services/peers"
    ],
    "components/create-invoice.js": [
      "aurelia-templating",
      "services/invoices",
      "services/data-store"
    ],
    "components/create-merchant.js": [
      "aurelia-templating",
      "services/merchants",
      "services/data-store"
    ],
    "components/create-user.js": [
      "aurelia-templating",
      "services/users",
      "models/user"
    ],
    "components/display-balance.js": [
      "aurelia-templating"
    ],
    "components/invoices-list.js": [
      "aurelia-templating",
      "services/invoices",
      "services/gateway-invoices"
    ],
    "components/merchant-details.js": [
      "aurelia-templating",
      "services/merchants",
      "services/data-store"
    ],
    "components/merchants-list.js": [
      "aurelia-templating"
    ],
    "components/nav/header-panel.js": [
      "aurelia-templating",
      "services/users"
    ],
    "components/nav/nav-panel.js": [
      "aurelia-templating"
    ],
    "components/network-info.js": [
      "aurelia-templating"
    ],
    "components/open-channel.js": [
      "aurelia-templating",
      "services/channels"
    ],
    "components/peer-node-details.js": [
      "aurelia-templating",
      "services/data-store"
    ],
    "components/peers-list.js": [
      "aurelia-templating",
      "services/peers"
    ],
    "components/users-list.js": [
      "aurelia-templating",
      "services/users"
    ],
    "components/wallet-info.js": [
      "aurelia-templating"
    ],
    "models/node-info.js": [
      "models/network-info",
      "models/wallet-info"
    ],
    "resources/value-converters/date-time-format.js": [
      "moment"
    ],
    "routes/accounts/login.js": [
      "services/users"
    ],
    "routes/accounts/register.js": [
      "services/users",
      "models/user",
      "aurelia-router"
    ],
    "routes/channels/index.js": [
      "aurelia-router"
    ],
    "routes/channels/routes/details.js": [
      "services/data-store"
    ],
    "routes/channels/routes/list.js": [
      "services/data-store"
    ],
    "routes/gateway-invoices/components/display-gateway-invoice.js": [
      "services/gateway-invoices",
      "aurelia-templating",
      "aurelia-router",
      "jquery"
    ],
    "routes/gateway-invoices/index.js": [
      "aurelia-router",
      "services/gateway-invoices",
      "services/data-store"
    ],
    "routes/gateway-invoices/routes/details.js": [
      "services/data-store"
    ],
    "routes/gateway-invoices/routes/list.js": [
      "services/data-store",
      "services/invoices"
    ],
    "routes/history/components/transactions-list.js": [
      "aurelia-templating"
    ],
    "routes/history/index.js": [
      "services/gateway-invoices",
      "services/data-store"
    ],
    "routes/home/index.js": [
      "services/data-store"
    ],
    "routes/invoices/components/display-invoice.js": [
      "services/invoices",
      "aurelia-templating",
      "aurelia-router",
      "jquery"
    ],
    "routes/invoices/index.js": [
      "aurelia-router",
      "services/invoices",
      "services/data-store"
    ],
    "routes/invoices/routes/create.js": [
      "services/data-store"
    ],
    "routes/invoices/routes/details.js": [
      "services/data-store"
    ],
    "routes/invoices/routes/list.js": [
      "services/data-store",
      "services/invoices"
    ],
    "routes/merchants/details.js": [
      "services/data-store",
      "services/merchants",
      "services/node-info",
      "models/merchant"
    ],
    "routes/peers/index.js": [
      "aurelia-router"
    ],
    "routes/peers/routes/details.js": [
      "services/data-store"
    ],
    "routes/peers/routes/list.js": [
      "services/data-store"
    ],
    "routes/users/index.js": [
      "aurelia-router",
      "services/users",
      "services/data-store"
    ],
    "routes/users/routes/details.js": [
      "services/data-store",
      "services/users"
    ],
    "routes/users/routes/list.js": [
      "services/data-store"
    ],
    "routes/wallet/components/display-address.js": [
      "aurelia-templating"
    ],
    "routes/wallet/components/pay-invoice.js": [
      "aurelia-templating",
      "services/invoices"
    ],
    "routes/wallet/index.js": [
      "aurelia-router",
      "services/data-store",
      "services/balances"
    ],
    "routes/wallet/routes/gateway.js": [
      "services/data-store"
    ],
    "routes/wallet/routes/manage.js": [
      "services/data-store"
    ],
    "routes/wallet/routes/pay.js": [
      "services/data-store"
    ],
    "routes/wallet/routes/receive.js": [
      "services/data-store",
      "services/addresses"
    ],
    "services/addresses.js": [
      "./http-wrapper",
      "models/address"
    ],
    "services/balances.js": [
      "./http-wrapper",
      "models/balance"
    ],
    "services/channels.js": [
      "./http-wrapper",
      "models/channel"
    ],
    "services/gateway-invoices.js": [
      "./http-wrapper",
      "models/gateway-invoice"
    ],
    "services/http-wrapper.js": [
      "aurelia-http-client",
      "../../config.json!"
    ],
    "services/invoices.js": [
      "./http-wrapper",
      "models/invoice",
      "models/gateway-invoice"
    ],
    "services/merchants.js": [
      "./http-wrapper",
      "./data-store",
      "models/merchant"
    ],
    "services/node-info.js": [
      "./http-wrapper",
      "models/node-info"
    ],
    "services/peers.js": [
      "./http-wrapper",
      "models/peer"
    ],
    "services/toast-messages.js": [
      "models/toast-message",
      "toastr",
      "aurelia-templating"
    ],
    "services/users.js": [
      "./http-wrapper",
      "./data-store",
      "models/user"
    ]
  }
});