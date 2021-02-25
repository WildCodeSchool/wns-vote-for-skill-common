type Wilder = {
    name: string,
    city: string,
    email: string,
}

export const helloWilder = (wilder:Wilder) => `Hello ${wilder.name} from ${wilder.city} :) :) :)`