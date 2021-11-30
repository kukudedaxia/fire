import styled from 'styled-components/macro'
import { Card, Row, Col } from '@douyinfe/semi-ui';

const Warpper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    .semi-card-body {
        min-height: 140px
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
      padding: 0 16px;
      .semi-card-body {
        min-height: 160px;
    }
  `};
`

const data = [{
    title: 'Development',
    desc: 'Come help us build the future of real estate ownership on chain with Solidity and Web3.',
},{
    title: 'Legal',
    desc: 'Help us navigate intricacies of DAO law and property rights and zoning',
},{
    title: 'Development',
    desc: 'Come help us build the future of real estate ownership on chain with Solidity and Web3.',
},{
    title: 'Legal',
    desc: 'Help us navigate intricacies of DAO law and property rights and zoning',
},{
    title: 'Development',
    desc: 'Come help us build the future of real estate ownership on chain with Solidity and Web3.',
},{
    title: 'Legal',
    desc: 'Help us navigate intricacies of DAO law and property rights and zoning',
},]

const Cards = () => {
  return (
    <Warpper>
         
         <Row gutter={[16,16]}>
            {data.map((item, index) => (
            <Col xs={{ span: 12 }} lg={{ span: 8}} >
                <Card 
                    title={item.title} 
                    key={index}
                    style={{ maxWidth: 360 }}
                >
                {item.desc}
                </Card>
            </Col>
          ))}
        </Row>
    </Warpper>
  )
}

export default Cards
