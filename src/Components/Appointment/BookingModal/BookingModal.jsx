import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  borderRadius: "10px",
  p: 4,
};

const BookingModal = ({ open, handleClose, booking, date }) => {
  const { name, time } = booking;
  const handleBookSend = (e) => {
    alert('Sumbmmiting')
    // collect data & send to the server
    handleClose();
    e.preventDefult();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      align="center"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            sx={{ fontWeight: 700, color: "#1CC7C1" }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleBookSend}>
            <TextField
              disabled
              sx={{ width: "100%", mt: 1, mb: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "100%", mt: 1, mb: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <TextField
              sx={{ width: "100%", mt: 1, mb: 1 }}
              id="outlined-size-small"
              placeholder="Enter your name"
              size="small"
            />
            <TextField
              sx={{ width: "100%", mt: 1, mb: 1 }}
              id="outlined-size-small"
              placeholder="Enter your mail"
              size="small"
            />
            <TextField
              sx={{ width: "100%", mt: 1, mb: 1 }}
              id="outlined-size-small"
              placeholder="Phone number"
              size="small"
            />
            <Button
              sx={{
                pt: 1.5,
                pb: 1.5,
                pr: 3,
                pl: 3,
                mt: 4,
                mb: 4,
                borderRadius: 0,
                color: "#fff",
              }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
                boxShadow: "none",
              }}
              type="submit"
              variant="text"
              endIcon={<SendIcon />}
            >
              SEND
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
