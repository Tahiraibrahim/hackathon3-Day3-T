import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "9cs6yn3u",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skz7qtrqNa4ttNmBkjpl47DVI1bTYlgUlveTdRAy9dfkFm35FdMGpepfCbuZn0dHy4NyA9FIyrZz6YA7xf7cEBDUsaWGdVhoZyyeNP7HykMTZXZXUTYHS1bK80ZUQ3hdrd41n3K2Net2VBDzVcy6NsGEkZu1Ywq2yKQbmJeUktFEGWKheL0t"
})
