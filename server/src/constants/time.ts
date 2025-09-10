// const TIME: { [key: string]: number } = {};

// TIME.SECOND = 1000;
// TIME.MINUTE = 60 * TIME.SECOND;
// TIME.HOUR = 60 * TIME.MINUTE;
// TIME.DAY = 24 * TIME.HOUR;

// export default TIME;

export const TIME = {
  SECOND: 1000,
  MINUTE: 60000,
  HOUR: 3600000,
  DAY: 86400000,
} as const;
