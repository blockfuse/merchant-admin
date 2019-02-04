export class CurrencySymbolWithValueValueConverter {
  toView(value, currencySymbol) {
    let symbol;
    switch (currencySymbol.toLowerCase()) {
      case 'btc':
        symbol = '₿';
        break;
      case 'ltc':
        symbol = 'Ł';
        break;
      default:
        symbol = '$'
    }
    const valueString = value ? value.toString() : '0';
    const dotIndex = valueString.indexOf('.');
    const truncatedValueString = dotIndex > -1 ? valueString.slice(0, dotIndex + 3) : valueString;

    return `${symbol} ${truncatedValueString}`;
  }
}
