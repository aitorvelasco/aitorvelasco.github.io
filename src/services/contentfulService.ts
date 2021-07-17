import { createClient } from 'contentful'
import { isProduction } from '../helpers'

const space = process.env.spaceId
const accessToken = process.env.accessToken
const host = !isProduction() ? 'preview.contentful.com' : ''

const contentfulClient = createClient({space, accessToken, host })

async function fetchEntries(contentType: string) {
  const entries = await contentfulClient.getEntries({content_type: contentType})
  return entries.items
}

export default fetchEntries
