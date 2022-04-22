import Navbar from './components/Navbar/Navbar'
import './App.css';
import { Box } from '@mui/system';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feeds/Feed';
import Rightbar from './components/Rightbar/Rightbar';
import { Stack } from '@mui/material';

function App() {
  return (
    <Box className="App" sx={{
      minWidth:"380px"
    }}>
      <Navbar/>
      <Stack direction="row" spacing={4} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
