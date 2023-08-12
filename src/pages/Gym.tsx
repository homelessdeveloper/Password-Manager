import { useQueryClient } from "@tanstack/react-query";
import { api } from "~/utils/api";

export default function Gym() {
    const context = api.useContext();
    const gyms = api.gym.addGym.useMutation({
        onSuccess(data) {
            void context.gym.getGyms.invalidate()
        } 
    })
    const allGyms = api.gym.getGyms.useQuery()
    const exampleGym = {
        name:'Isus',
        pricePerMonth:1200,
        adress:'qweqwewq'
    }
    return (
        <div>
            <button onClick={() => gyms.mutate(exampleGym)}>Add new gym</button>
            <ul>
                <li>{allGyms.data?.map((gym) => gym.name )}</li>
           </ul>
        </div>
    )
}