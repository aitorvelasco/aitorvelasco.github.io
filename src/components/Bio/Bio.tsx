import { Container, Typography } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

const Bio = ({aboutMe}) => {
  return (
    <Container maxWidth="xl">
      <Typography paragraph component="span">
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={aboutMe} />
      </Typography>
    </Container>
  )
}

export default Bio
