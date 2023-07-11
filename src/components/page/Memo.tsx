import { Box, Button } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';

export const Memo = () => {
  const [rightNum, setRightNum] = useState(0);
  const [leftNum, setLeftNum] = useState(0);

  const rightCountUp = useCallback(() => {
    setRightNum((prev) => prev + 1);
  }, [setRightNum]);

  const leftCountUp = () => setLeftNum((prev) => prev + 1);

  const RCard = useMemo(
    () => <RightCard rightNum={rightNum} rightCountUp={rightCountUp} />,
    [rightNum, rightCountUp]
  );

  return (
    <Box
      width='100vw'
      height='100vh'
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <LeftCard leftNum={leftNum} leftCountUp={leftCountUp} />
        {RCard}
      </Box>
    </Box>
  );
};

const RightCard: React.FC<{ rightNum: number; rightCountUp: () => void }> = ({
  rightNum,
  rightCountUp,
}) => {
  return (
    <Box
      sx={{ padding: '16px', border: '1px solid black', borderRadius: '4px' }}
    >
      <Box sx={{ textAlign: 'center' }}>{rightNum}</Box>
      <Button onClick={rightCountUp}>up</Button>
    </Box>
  );
};

const LeftCard: React.FC<{ leftNum: number; leftCountUp: () => void }> = ({
  leftNum,
  leftCountUp,
}) => {
  return (
    <Box
      sx={{ padding: '16px', border: '1px solid black', borderRadius: '4px' }}
    >
      <Box sx={{ textAlign: 'center' }}>{leftNum}</Box>
      <Button onClick={leftCountUp}>up</Button>
    </Box>
  );
};
