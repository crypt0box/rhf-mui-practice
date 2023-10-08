import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box display='flex' columnGap={1} flexWrap='wrap'>
      <Link to='/'>Home</Link>
      <Link to='/rhfValidate'>RhfValidate</Link>
      <Link to='/range'>Range</Link>
      <Link to='/apiResponse'>ApiResponse</Link>
      <Link to='/userInput'>UserInput</Link>
      <Link to='/zodTransform'>ZodTransform</Link>
      <Link to='/tablePerformance'>TablePerformance</Link>
      <Link to='/imageList'>ImageList</Link>
      <Link to='/rhfFieldArray'>RhfFieldArray</Link>
      <Link to='/memo'>Memo</Link>
      <Link to='/ky'>Ky</Link>
    </Box>
  );
};
