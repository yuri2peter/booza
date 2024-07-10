import { z } from 'zod';

export const DataSchema = z.object({});
export type Data = z.infer<typeof DataSchema>;
export const defaultValue = DataSchema.parse({});
