type Wilder = {
    name: string,
    city: string,
    email: string,
}

const helloWilder = (wilder:Wilder) => `Hello ${wilder.name} from ${wilder.city}`