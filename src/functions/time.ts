/**
 * Parse ISO 8601 duration (with a few limitations)
 */
const durationRegex = /^(-)?P(?:(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?|(\d+)W)$/;

export default function parseDuration(duration: string) {
  const res = durationRegex.exec(duration);

  if (!res) {
    throw new Error(`Invalid duration ${duration}`);
  }

  const [year, month, day, hour, minute, second] = res
    .slice(2, 8)
    .map((token) => (token ? Number(token) : 0));

  const time = new Date();
  time.setFullYear(Number(year));
  time.setMonth(Number(month));
  time.setDate(Number(day));
  time.setHours(Number(hour));
  time.setMinutes(Number(minute));
  time.setSeconds(Number(second));

  return time;
}
