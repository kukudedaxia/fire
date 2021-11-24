import styled, { css } from 'styled-components/macro'
import { Space } from '@douyinfe/semi-ui'

import { useDarkModeManager } from '../../state/user/hooks'
import laboratoryBg from '../../assets/home/laboratoryBg.png'
import laboratory from '../../assets/home/laboratory.png'
import laboratoryDark from '../../assets/home/laboratory-dark.png'
import vision from '../../assets/home/vision.png'
import visionDark from '../../assets/home/vision-dark.png'
import we from '../../assets/home/we.png'
import weDark from '../../assets/home/we-dark.png'

const PanelItem = styled.div`
  ${({ theme }) =>
    theme.darkMode &&
    css`
      background: url(${laboratoryBg}) no-repeat center center;
      background-size: 100% 100%;
    `}
`

const PanelContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  padding: 99px 0;
  width: 1200px;
  margin: 0 auto;
`

const PanelTitle = styled.div`
  margin-bottom: 60px;
  font-size: 62px;
  font-weight: 900;
  color: ${({ theme }) => theme.text2};
`

const PanelDescription = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text2};
`

const PanelImg = styled.img`
  width: 500px;
  height: 646px;
`

const Intro = () => {
  const [darkMode] = useDarkModeManager()

  return (
    <section>
      <PanelItem>
        <PanelContent>
          <article>
            <PanelTitle>What is a laboratory?</PanelTitle>
            <PanelDescription>
              <Space vertical>
                <div>A laboratory for blockchain projects, where we will explore various blockchain applications</div>
                <div>
                  Our team has created more than 200 projects. Thus, we have scrutinized the patterns of user behavior.
                  This has enabled us to achieve maximum efficiency in solving our client’s problems.
                </div>
              </Space>
            </PanelDescription>
          </article>
          <PanelImg src={darkMode ? laboratoryDark : laboratory} />
        </PanelContent>
      </PanelItem>
      <PanelItem>
        <PanelContent reverse={true}>
          <article>
            <PanelTitle>Laboratory vision</PanelTitle>
            <PanelDescription>
              Our team has created more than 200 projects. Thus, we have scrutinized the patterns of user behavior. This
              has enabled us to achieve maximum efficiency in solving our client’s problems.
            </PanelDescription>
          </article>
          <PanelImg src={darkMode ? visionDark : vision} />
        </PanelContent>
      </PanelItem>
      <PanelItem>
        <PanelContent>
          <article>
            <PanelTitle>who are we?</PanelTitle>
            <PanelDescription>
              <Space vertical>
                <div>We are a group of experts in the blockchain field, and we gather in the laboratory.</div>
                <div>
                  We are creative technical experts and have developed almost all types of software. Examples include
                  large-scale web infrastructure, online games.
                </div>
              </Space>
            </PanelDescription>
          </article>
          <PanelImg src={darkMode ? weDark : we} />
        </PanelContent>
      </PanelItem>
    </section>
  )
}

export default Intro
