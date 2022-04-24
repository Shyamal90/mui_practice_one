import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Avatar, Fab, IconButton, Stack, TextField, Tooltip } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "4px"
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><Tooltip title="Add " sx={{ position: "fixed", bottom: "70px", left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Create Post
                    </Typography>

                    <Stack direction="row" alignItems="center">
                        <Avatar sx={
                            {
                                height: "30px",
                                width: "30px",
                                margin: "0px 15px 0px 0px"
                                // margin:"0 0.3em"
                            }
                        } alt="Shyamal Sardar" src={`https://avatars.githubusercontent.com/u/88072892?v=4`} />
                        <Typography fontWeight={500} varient="span">Shyamal Sardar</Typography>
                    </Stack>



                    <TextField
                        id="filled-multiline-static"
                        label="What's your mind?"
                        multiline
                        rows={4}
                        variant="filled"
                        sx={{width:"100%",marginTop:"10px"}}
                        
                    />

                    <Stack mt={2} mb = {5} direction="row" gap={"5px"}>
                        <EmojiEmotionsIcon color="primary"/>
                        <ImageIcon color="secondary"/>
                        <VideoCameraBackIcon color="success"/>
                        <PersonAddIcon color="error"/>
                    </Stack>

                    <Button variant="contained" mt={2}>Create Post</Button>

                </Box>
            </Modal>
        </div>
    );
}
