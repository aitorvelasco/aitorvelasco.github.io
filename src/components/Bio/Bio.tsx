import { Typography } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

const Bio = ({aboutMe}) => {
  return (
      <Typography paragraph component="span">
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={aboutMe} />
      </Typography>
  )
}

export default Bio
