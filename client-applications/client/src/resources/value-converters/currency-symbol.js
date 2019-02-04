export class CurrencySymbolValueConverter {
  toView(currencySymbol) {
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
    return `${symbol}`;
  }
}
