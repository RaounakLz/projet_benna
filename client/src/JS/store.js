import { configureStore } from '@reduxjs/toolkit'
// import accessoireSlice from './accessoireSlice'

import clientSlice from './clientSlice/clientSlice'
import produitSlice from './produitSlice'
import commandeSlice from './commandeSlice'


export const store = configureStore({
  reducer: {
    client: clientSlice,

    commande:commandeSlice,
    produit: produitSlice,

  },
})