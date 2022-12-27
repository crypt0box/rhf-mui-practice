import styled from '@emotion/styled';
import { RecipeReviewCard } from '../ui/RecipeReviewCard';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 345px)',
  gridGap: '24px',
  justifyContent: 'center',
  padding: '24px',
});

export const ImageList = () => {
  return (
    <Grid>
      {Array.from({ length: 50 }).map((_, i) => (
        <RecipeReviewCard key={i} index={i} />
      ))}
    </Grid>
  );
};
