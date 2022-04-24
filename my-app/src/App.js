import Navbar from './components/Navbar/Navbar'
import './App.css';
import { Box } from '@mui/system';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feeds/Feed';
import Rightbar from './components/Rightbar/Rightbar';
import { Stack} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicModal from './components/BasicModal/BasicModal';
import { useState } from 'react';


function App() {

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })


  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" sx={{
        minWidth: "380px"
      }} bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <BasicModal />
      </Box>
     </ThemeProvider>
  );
}

export default App;
