const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_DRAFT

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
  host: 'preview.contentful.com'
})

async function fetchEntries() {
  const entries = await client.getEntries({content_type: 'job'})
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default fetchEntries
