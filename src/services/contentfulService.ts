import { createClient } from 'contentful'

const space = process.env.spaceId
const accessToken = process.env.accessToken

const contentfulClient = createClient({space, accessToken })

async function fetchEntries(contentType: string) {
  const jobs = await contentfulClient.getEntries({content_type: contentType})
  return jobs.items
}

export default fetchEntries
