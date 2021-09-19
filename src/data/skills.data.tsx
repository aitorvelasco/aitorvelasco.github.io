import {
  Html5Icon,
  Css3Icon,
  GitIcon,
  JestIcon,
  JsIcon,
  MuiIcon,
  NextJsIcon,
  ReactIcon,
  SassIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TsIcon,
} from '../components/assets'

const SKILL_ICONS = {
  HTML5: <Html5Icon />,
  CSS3: <Css3Icon />,
  GIT: <GitIcon />,
  JEST: <JestIcon />,
  JS: <JsIcon />,
  MUI: <MuiIcon />,
  NEXTJS: <NextJsIcon />,
  REACT: <ReactIcon />,
  SASS: <SassIcon />,
  SB: <StorybookIcon />,
  SC: <StyledComponentsIcon />,
  TS: <TsIcon />
}

const skills = [
  {
    name: 'HTML5',
    img: SKILL_ICONS['HTML5'],
  },
  {
    name: 'CSS3',
    img: SKILL_ICONS['CSS3'],
  },
  {
    name: 'Sass',
    img: SKILL_ICONS['SASS'],
  },
  {
    name: 'Javascript ES6+',
    img: SKILL_ICONS['JS'],
  },
  {
    name: 'Typescript',
    img: SKILL_ICONS['TS'],
  },
  {
    name: 'React',
    img: SKILL_ICONS['REACT'],
  },
  {
    name: 'NextJS',
    img: SKILL_ICONS['NEXTJS'],
  },
  {
    name: 'Git',
    img: SKILL_ICONS['GIT'],
  },
  {
    name: 'Material UI',
    img: SKILL_ICONS['MUI'],
  },
  {
    name: 'Styled-Components',
    img: SKILL_ICONS['SC'],
  },
  {
    name: 'Storybook',
    img: SKILL_ICONS['SB'],
  },
  {
    name: 'Jest',
    img: SKILL_ICONS['JEST'],
  },
]

export default skills
