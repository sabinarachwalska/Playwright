export function delay(timeMs: number): Promise<void> {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeMs);
  });
}
