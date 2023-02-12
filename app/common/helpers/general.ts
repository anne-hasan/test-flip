export function formatCurrency(amount: number, thousands: string = '.') {
  try {
    const negativeSign = amount < 0 ? '-' : '';

    let i = amount.toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
    );
  } catch (e) {
    console.log(e);
  }
}

export function formatDate(date: string) {
  try {
    var d = jsDate(date);
    return d?.toLocaleDateString('id', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }); // 9/17/2016
  } catch (e) {
    console.log(e);
  }
}

export function jsDate(date: string) {
  try {
    // Split timestamp into [ Y, M, D, h, m, s ]
    var t = date.split(/[- :]/);
    var formattedDate = new Date(
      parseInt(t[0]),
      parseInt(t[1]) - 1,
      parseInt(t[2]),
      parseInt(t[3]),
      parseInt(t[4]),
      parseInt(t[5]),
    );
    return formattedDate;
  } catch (error) {
    console.log('helper/general/jsDate', error);
  }
}
