import * as React from 'react';
import styles from './index.less';
const Index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bg} style={{backgroundImage: "url(https://publicdata.vmate.in/static/activity/promote2020/page1_bg.png)"}}>
        <div className={styles.title}>
          <img src="https://publicdata.vmate.in/static/activity/promote2020/page1_title.png" />
        </div>
        <div className={styles.content}>
          <img src="https://publicdata.vmate.in/static/activity/promote2020/page1_content.png" />
        </div>
        <div className={styles.button}>
          <img src="https://publicdata.vmate.in/static/activity/promote2020/page1_button.png" />
        </div>
      </div>
    </div>
  )
}

export default Index;