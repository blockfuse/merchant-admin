export class SatsToBtcValueConverter {
  toView(value) {
    const satoshisPerBtc = 100000000;
    const satoshis = value;

    const btcValue = value / satoshisPerBtc;

    return `${btcValue}`;
  }
}
