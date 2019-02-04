export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .globalResources('resources/value-converters/currency-symbol')
    .globalResources('resources/value-converters/currency-symbol-with-value')
    .globalResources('resources/value-converters/date-time-format')
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot());
}
