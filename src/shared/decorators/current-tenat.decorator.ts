import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentTenant = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return req.headers['tenant'] ?? null;
  },
);
