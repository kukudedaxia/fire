import { List, Avatar, ButtonGroup } from '@douyinfe/semi-ui'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Pool = () => {
  const [listData, setListData] = useState<JSX.Element[]>([])

  useEffect(() => {
    const temp: JSX.Element[] = []
    Array.from(Array(5)).map((_, i) =>
      temp.push(<p style={{ color: 'var(--semi-color-text-2)', margin: '4px 0', width: 500 }}>some title {i}</p>)
    )
    setListData(temp)
  }, [])

  return (
    <div style={{ padding: 12, border: '1px solid var(--semi-color-border)', margin: 12 }}>
      {/* @ts-ignore */}
      <List
        dataSource={listData}
        renderItem={(item, index) => (
          <List.Item
            header={<Avatar color="blue">SE</Avatar>}
            main={
              <div>
                <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>示例标题</span>
                <span>{item}</span>
              </div>
            }
            extra={
              <ButtonGroup theme="borderless">
                <Link to={`/pool/${index}`}>info</Link>
              </ButtonGroup>
            }
          />
        )}
      />
    </div>
  )
}

export default Pool
