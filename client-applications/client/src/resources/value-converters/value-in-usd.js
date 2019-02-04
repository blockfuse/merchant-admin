export class ValueInUsdValueConverter {
  toView(value, lastExchangeRate) {
    const dollarsPerSatoshi = lastExchangeRate / 100000000;
    const satoshis = value;

    const dollarValue = dollarsPerSatoshi * satoshis;

    const valueString = dollarValue ? dollarValue.toString() : '0';
    const dotIndex = valueString.indexOf('.');
    const truncatedValueString = dotIndex > -1 ? valueString.slice(0, dotIndex + 3) : valueString;

    return `${truncatedValueString}`;
  }
}
