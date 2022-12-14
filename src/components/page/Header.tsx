import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box display='flex' gap={5}>
      <Link to='/'>Home</Link>
      <Link to='/rhfValidate'>RhfValidate</Link>
      <Link to='/range'>Range</Link>
      <Link to='/apiResponse'>ApiResponse</Link>
      <Link to='/userInput'>UserInput</Link>
      <Link to='/zodTransform'>ZodTransform</Link>
      <Link to='/tablePerformance'>TablePerformance</Link>
      <Link to='/imageList'>ImageList</Link>
    </Box>
  );
};
