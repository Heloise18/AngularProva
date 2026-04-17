export interface Contact{
    id: string,
    name: string,
    email: string,
    phone:string
}

export interface GetAllCOntacts{
    contacts: Contact[]

}