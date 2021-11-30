import styled from 'styled-components/macro'

const Warpper = styled.div`

`

const List = styled.div`
    display: flex;
    width: 100%;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    max-width: 900px;
    border-bottom: 1px solid #16151a;
    padding-bottom: 20px;
    margin: 0 auto;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        align-items: center;
        width: 100%;
  `};
`

const Oindex = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    padding-top: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #cccccc;
    color: #333;
    font-size: 24px;
    line-height: 42px;
    font-weight: 700;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        width: 60px;
        margin-top: 20px;
        height: 60px;
    `};
`

const YellowLine = styled.div`
    width: 80px;
    height: 1px;
    margin-right: 32px;
    margin-left: 32px;
    background-color: #f28b03;
    ${({ theme }) => theme.mediaWidth.upToSmall`
       display: none;
    `};
`

const StyledFlex = styled.div`
    display: flex;
    align-items: center;
`

const StyledDiv = styled.div`
    display: flex;
    padding-top: 24px;
    align-items: flex-start;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex:1;
    ${({ theme }) => theme.mediaWidth.upToSmall`
     align-items: center;
    `};
`

const StyledH3 = styled.h3`
    margin-bottom: 24px
    color: #333;
    font-size: 30px;
    line-height: 42px;
    padding: 0;
    margin: 0;
`

const flagData = [{
    origin: 'TV',
    desc: 'Print the HUMAN logo and name on the Starship of Space X',
},{
    origin: 'Game',
    desc: 'Let Tesla produce a special edition model called HUMAN and print the HUMAN logo',
},{
    origin: 'Art',
    desc: 'Print the HUMAN logo on the LOL team clothes',
},{
    origin: 'World',
    desc: `Print HUMAN's logo on the football jersey`,
}, {
    origin: 'Human Dao',
    desc: ' DAO members think together'
}]

const Flags = () => {
  return (
    <Warpper>
        {flagData.map((item, index) => (
          <List key={index} >
              <StyledFlex>
                <Oindex>{index}</Oindex>
                <YellowLine></YellowLine>
              </StyledFlex>
              <StyledDiv>
                 <StyledH3>{item.origin}</StyledH3>
                  <p>{item.desc}</p>
              </StyledDiv>
          </List>
        ))}
    
    </Warpper>
  )
}

export default Flags
