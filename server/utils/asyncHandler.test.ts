import { describe, it, vi, expect } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { asyncHandler } from './asyncHandler';

describe('asyncHandler', () => {
    it('calls the async function with req, res, next', async () => {
        const fn = vi.fn(async () => 'ok');
        const req = {} as Request;
        const res = {} as Response;
        const next = vi.fn();

        const handler = asyncHandler(fn);
        await handler(req, res, next);

        expect(fn).toHaveBeenCalledWith(req, res, next);
        expect(next).not.toHaveBeenCalled();
    });

    it('calls next on error', async () => {
        const error = new Error('fail');
        const fn = vi.fn(async () => {
            throw error;
        });
        const req = {} as Request;
        const res = {} as Response;
        const next = vi.fn();

        const handler = asyncHandler(fn);
        await handler(req, res, next);

        expect(next).toHaveBeenCalledWith(error);
    });
});
