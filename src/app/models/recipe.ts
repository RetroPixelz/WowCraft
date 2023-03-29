export interface Recipe {
    _id?: string,
    title: string,
    description: string,
    image: string,
    amount: number,
    ingredients: any[],
    craftable?: Boolean
}
