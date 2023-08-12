import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const gym = z.object({
    name: z.string(),
    pricePerMonth: z.number(),
    adress: z.string()
})
const gyms: z.infer<typeof gym>[] = []
export const gymRouter = createTRPCRouter({
 getGyms: publicProcedure
    .query(() => {
      return gyms 
      
    }),
    addGym: publicProcedure 
    .input(gym)
    .mutation(({input}) => {
        gyms.push(input)
    })
});

