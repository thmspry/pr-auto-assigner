import { z } from "zod";

const ListSchema = z.object({
    id: z.number(),
    name: z.string(),
    people: z.array(z.string()),
});

export const StorageDataSchema = z.object({
    lists: z.array(ListSchema),
});

export type StorageData = z.infer<typeof StorageDataSchema>;