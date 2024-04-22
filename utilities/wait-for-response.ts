import { Request, Response } from '@playwright/test';

/**
 * Invokes an action and waits for a network request associated with it to finish.
 * @param request Network request to wait for.
 * @param action Action to invoke (i.e. a click of a button).
 * @returns Promise, that returns a network response.
 */
export async function waitForResponse(request: Promise<Request>, action: () => Promise<void>): Promise<Response | null> {
  await action();
  const r = await request;
  const result = await r.response();
  return result;
}
