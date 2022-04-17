import React, { useContext } from 'react'

export function useClient() {
    const client = useContext(DatabaseContext)
    if (client === undefined)
        throw Error('No client has been specified using Provider.')
    return client
}

export const DatabaseContext = React.createContext()

export const DatabaseProvider = DatabaseContext.Provider
export const DatabaseConsumer = DatabaseContext.Consumer

