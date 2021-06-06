import Image from 'next/image'
import styled from 'styled-components'

import { CVInfo } from '../../data'
import { H2, H3 } from  '../../../styles/theme'

const CompanyLogo = styled.span`
  padding-left: 16px;
  position: relative;
`

const StageListItem = styled.li`
  padding: 8px 0;
  &:not(:last-of-type) {
    border-bottom: 2px solid #e0e0e0;
  }
`

const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ProjectListItem = styled.li`
  padding: 16px;
  & img {
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Stage = () => {
  return (
    <ul>
      {CVInfo.map((stage) => {
        const { company, logo, time, projects } = stage
        return (
          <StageListItem key={company}>
            <H2>{company}</H2>
            <CompanyLogo>
              <Image src={`/portfolio/${logo}`} layout="fill" />
            </CompanyLogo>
            <p>{time}</p>
            <ProjectList>
              {projects.map((project) => {
                const { name, description, image, url } = project
                return (
                  <ProjectListItem key={name}>
                    <H3>{name}</H3>
                    {image && url && (
                      <a href={url} target="_blank">
                        <Image
                          src={`/portfolio/${image}`}
                          width="1280"
                          height="640"
                        />
                      </a>
                    )}
                    <p>{description}</p>
                  </ProjectListItem>
                )
              })}
            </ProjectList>
          </StageListItem>
        )
      })}
    </ul>
  )
}

export default Stage
