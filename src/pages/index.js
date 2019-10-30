import React, { useState, useEffect, useContext } from "react"
// import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import CareText from "../components/careText"
import ButtonLink from "../components/buttonLink"
import SVG from "../images/splash.svg"

import Twitter from "../components/svg/twitter"
import Github from "../components/svg/github"
import Linkedin from "../components/svg/linkedin"

import Sketch from "../components/svg/sketch"
import Accessibility from "../components/svg/accessibility"
import Code from "../components/svg/code"
import Performance from "../components/svg/performance"
import Teamwork from "../components/svg/teamwork"
import Learning from "../components/svg/learning"

const Splash = styled.div`
  margin-top: 4rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const SplashLeft = styled.div``

const SplashRight = styled.div``

const StyledName = styled.span`
  color: ${props => props.theme.colors.primaryDark};
`

const SplashText = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;

  strong {
    background: ${props => props.theme.colors.primaryLight};
    font-weight: normal;
    display: inline-block;
    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
  }
`

const PageSection = styled.div`
  margin: 4rem 0;
`

const PageSectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  text-align: center;
`

const IconGrid = styled.div`
  max-width: 760px;
  margin: 0 auto;
  margin-top: 3rem;

  @media (min-width: 568px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-gap: 2rem 5rem;
  }
`

const Icon = styled.div`
  font-size: .9rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 568px) {
    margin-bottom: 0;
  }
`

const Links = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: ${props => (props.socialmedia ? "center" : "left")};

  @media (min-width: 1024px) {
    padding-top: ${props => (props.socialmedia ? "2rem" : "1rem")};
    margin-left: ${props => (props.socialmedia ? "-0.625rem" : 0)};
  }
`

const LinkContainer = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    display: inline;
    padding-right: 2rem;
    text-align: left;
  }
`

const SocialLinkContainer = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    display: inline;
    padding-right: 2rem;
  }
`

const SocialMediaLink = styled.a`
  align-items: center;
  display: inline-flex;
  padding: 0.625rem;
  color: ${props => props.theme.colors.primaryDark};

  span {
    /* color: ${props => props.theme.colors.primaryDark}; */
    margin-left: 0.625rem;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.primaryDark};
    color: #fff;

    svg path {
      fill: #fff;
    }
  }
`

const IndexPage = (props) => {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const [theme, setTheme] = useState(isDarkMode ? darkTheme : lightTheme)
  // useEffect(() => {
  //   const storedMode = localStorage.getItem("isDarkMode");
  //   if(storedMode === "true") {
  //     setIsDarkMode(true)
  //     setTheme(darkTheme)
  //   }
  //   else {
  //     setIsDarkMode(false)
  //     setTheme(lightTheme)
  //   }
  // })
  return (
    <div>
      <SEO title="Home" />
      <Splash>
        <SplashLeft>
          <h1>
            Hello, I'm <StyledName>Jamena McInteer</StyledName>.
          </h1>
          <SplashText>
            I’m a <strong>full stack developer</strong> and{" "}
            <strong>UI/UX designer</strong> from Austin, TX.
          </SplashText>
          <SplashText>
            I like to build <em>beautiful things</em> that{" "}
            <em>make a difference</em>.
          </SplashText>
          <Links>
            <LinkContainer>
              <ButtonLink
                to="/writing"
                text="Read My Blog"
              />
            </LinkContainer>
          </Links>
          {/* <SplashText style={{ minHeight: "5rem" }}>
            I care deeply about <CareText />.
          </SplashText> */}
        </SplashLeft>
        <SplashRight>
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>
            <SVG />
          </div>
        </SplashRight>
      </Splash>

      <PageSection>
        <PageSectionHeader>I care deeply about...</PageSectionHeader>
        <IconGrid>
          <Icon>
            <Sketch c1={themeContext.colors.svgIcons} />
            <p>Beautiful, functional user experiences</p>
          </Icon>
          <Icon>
            <Accessibility c1={themeContext.colors.svgIcons} />
            <p>Accessibility and inclusion</p>
          </Icon>
          <Icon>
            <Code c1={themeContext.colors.svgIcons} />
            <p>Clear, efficient code</p>
          </Icon>
          <Icon>
            <Performance c1={themeContext.colors.svgIcons} />
            <p>Security and performance</p>
          </Icon>
          <Icon>
            <Teamwork c1={themeContext.colors.svgIcons} />
            <p>Teamwork and communication</p>
          </Icon>
          <Icon>
            <Learning c1={themeContext.colors.svgIcons} />
            <p>Lifelong learning</p>
          </Icon>
        </IconGrid>
      </PageSection>
      
      <Links socialmedia>
        <SocialLinkContainer>
          <SocialMediaLink href="https://twitter.com/JamenaMcinteer">
            <Twitter c1={themeContext.colors.svgIcons} />
            <span>Twitter</span>
          </SocialMediaLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialMediaLink href="https://github.com/jamenamcinteer">
            <Github c1={themeContext.colors.svgIcons} />
            <span>GitHub</span>
          </SocialMediaLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialMediaLink href="https://www.linkedin.com/in/jamena-mcinteer-5511aa45/">
            <Linkedin c1={themeContext.colors.svgIcons} />
            <span>LinkedIn</span>
          </SocialMediaLink>
        </SocialLinkContainer>
      </Links>
    </div>
  )
}

export default IndexPage
