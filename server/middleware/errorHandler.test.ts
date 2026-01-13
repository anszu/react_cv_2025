import { describe, it, vi, expect, beforeEach } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { errorHandler } from './errorHandler';

describe('errorHandler', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = {};
        res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        };
        next = vi.fn();
        vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('returns provided status and message', () => {
        const err = { status: 400, message: 'Bad Request' };

        errorHandler(err, req as Request, res as Response, next);

        expect(console.error).toHaveBeenCalledWith(err);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Bad Request' });
    });

    it('falls back to 500 default error', () => {
        const err = {};

        errorHandler(err, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            error: 'Internal Server Error',
        });
    });
});
