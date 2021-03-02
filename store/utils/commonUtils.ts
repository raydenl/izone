export const switchCase = (cases: any) => (key: any) =>
  cases.hasOwnProperty(key) ? cases[key] : undefined;
