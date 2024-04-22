import { Page } from '@playwright/test';

export type PageLoadOptions = Parameters<Page['goto']>[1];
