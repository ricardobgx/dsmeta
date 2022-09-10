const FormatterUtil = {
  get2Digits(numberToBeFormatted: number): string {
    return numberToBeFormatted < 10
      ? `0${numberToBeFormatted}`
      : numberToBeFormatted.toString();
  },

  getISOUTCDateString(date: Date): string {
    date.setHours(date.getHours() + 3);

    return `${date.getFullYear()}-${FormatterUtil.get2Digits(
      date.getMonth() + 1
    )}-${FormatterUtil.get2Digits(date.getDate())}`;
  },

  getLocaleUTCDateString(date: Date): string {
    date.setHours(date.getHours() + 3);

    return `${FormatterUtil.get2Digits(
      date.getDate()
    )}/${FormatterUtil.get2Digits(date.getMonth() + 1)}/${date.getFullYear()}`;
  },
};

export default FormatterUtil;
