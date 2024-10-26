import { memo } from 'react';

const AwardEmoji = ({ level }: { level: string }) => {
  const keywordsOfType = [['金'], ['银'], ['铜']];
  const emojis = ['🥇', '🥈', '🥉'];

  const type = keywordsOfType.findIndex((keywords) =>
    keywords.some((keyword) => level.includes(keyword))
  );
  const emoji = emojis[type];

  return <>{emoji}</>;
};

export default memo(AwardEmoji);
