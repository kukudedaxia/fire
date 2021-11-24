import { Calendar } from '@douyinfe/semi-ui'
import { CSSProperties } from 'react'

const User = () => {
  const dailyEventStyle = {
    position: 'absolute',
    left: '0',
    right: '0',
    borderRadius: '3px',
    boxSizing: 'border-box',
    border: 'var(--semi-color-primary) 1px solid',
    padding: '10px',
    backgroundColor: 'var(--semi-color-primary-light-default)',
    overflow: 'hidden'
  } as CSSProperties
  const displayValue = new Date(2019, 6, 23, 8, 32, 0)
  const dateRender = (dateString?: string) => {
    if (dateString === new Date(2019, 6, 23).toString()) {
      return (
        <>
          <div style={{ ...dailyEventStyle, top: '500px', height: 50 }}>吃饭 🍰</div>
          <div style={{ ...dailyEventStyle, top: '0', height: 400 }}>睡觉 😪</div>
          <div style={{ ...dailyEventStyle, top: '700px', height: 100 }}>打豆豆 🎮</div>
        </>
      )
    } else {
      return null
    }
  }
  return <Calendar height={700} mode="week" displayValue={displayValue} dateGridRender={dateRender} />
}

export default User
