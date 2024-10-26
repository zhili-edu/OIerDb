import React, { memo } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import styles from './FAQ.module.less';

const FAQ: React.FC = () => {
  return (
    <>
      <Header
        className={styles.header}
        block
        as="h4"
        content="常见问题"
        attached="top"
        icon="info"
      />
      <Segment attached="bottom">
        <h5>这是什么网站？</h5>
        <p>
          这是一个信息学竞赛选手获奖记录并对学校进行排名的数据库。本网站名为「OIerDb」。数据持续更新中。
        </p>
        <p>
          OIerDb 原始数据不接受任何修改，除非是为了与{' '}
          <a href="https://www.noi.cn" target="_blank" rel="noreferrer">
            NOI 官网
          </a>{' '}
          保持一致。
        </p>
        <h5>我能够做什么？</h5>
        <p>
          你能够在这个网站上查询选手的获奖记录，目前可以通过姓名、姓名首字母缩写、省份、年级和学校来进行查询。
        </p>
      </Segment>
    </>
  );
};

export default memo(FAQ);
