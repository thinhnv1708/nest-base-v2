const concatMessage = (message: string, label: string, value: string): string =>
  `${message}-[${label}: ${value}]`;

export const buildLogMessage = (
  message: string,
  reqBody?: string,
  response?: string,
  stask?: string,
): string => {
  const args = [
    { label: 'Message', value: message },
    { label: 'RequestBody', value: reqBody },
    { label: 'Response', value: response },
    { label: 'Stack', value: stask },
  ];

  return args.reduce((previousValue: string, currentValue) => {
    if (currentValue.value) {
      return concatMessage(
        previousValue,
        currentValue.label,
        currentValue.value,
      );
    } else {
      return previousValue;
    }
  }, '');
};
