import {
  Css3Icon,
  CypressIcon,
  FormikIcon,
  GitIcon,
  HookFormIcon,
  Html5Icon,
  JestIcon,
  JsIcon,
  MuiIcon,
  NextJsIcon,
  NxIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TsIcon,
} from '../components/assets'

interface skill {
  name: string
  icon: JSX.Element
  url: string
}

const skills: skill[] = [
  {
    name: 'HTML5',
    icon: <Html5Icon />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/html',
  },
  {
    name: 'CSS3',
    icon: <Css3Icon />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/css',
  },
  {
    name: 'Javascript ES6+',
    icon: <JsIcon />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Git',
    icon: <GitIcon />,
    url: 'https://git-scm.com',
  },
  {
    name: 'Typescript',
    icon: <TsIcon />,
    url: 'https://www.typescriptlang.org'
  },
  {
    name: 'React',
    icon: <ReactIcon />,
    url: 'https://reactjs.org',
  },
  {
    name: 'Redux',
    icon: <ReduxIcon />,
    url: 'https://es.redux.js.org',
  },
  {
    name: 'NextJS',
    icon: <NextJsIcon />,
    url: 'https://nextjs.org',
  },
  {
    name: 'Formik',
    icon: <FormikIcon />,
    url: 'https://formik.org',
  },
  {
    name: 'Sass',
    icon: <SassIcon />,
    url: 'https://sass-lang.com/documentation',
  },
  {
    name: 'Material UI',
    icon: <MuiIcon />,
    url: 'https://mui.com',
  },
  {
    name: 'Styled-Components',
    icon: <StyledComponentsIcon />,
    url: 'https://styled-components.com',
  },
  {
    name: 'Storybook',
    icon: <StorybookIcon />,
    url: 'https://storybook.js.org',
  },
  {
    name: 'Jest',
    icon: <JestIcon />,
    url: 'https://jestjs.io',
  },
  {
    name: 'Cypress',
    icon: <CypressIcon />,
    url: 'https://www.cypress.io',
  },
]


const futureSkills: skill[] = [
  {
    name: 'Nx',
    icon: <NxIcon />,
    url: 'https://nx.dev',
  },
  {
    name: 'React Hook Form',
    icon: <HookFormIcon />,
    url: 'https://react-hook-form.com',
  },
]

export {
  skills,
  futureSkills 
}
