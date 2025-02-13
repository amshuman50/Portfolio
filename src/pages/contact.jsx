import sun from "../Assets/sun.jpg"
import getin from "../Assets/get in.jpg"
import contact from "../Assets/contact.png"
import '../styles/contact.css'

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send";

import HelperTextMisaligned, { Textarea } from "../component/custom_form_field";

export default function Contact() {
    document.title = "Contact - Amshu"
    return (
        <>
            <div style={{ display: "flex" }}>
                <div id='git'>
                    <div style={{ textAlign: "center" }}>
                        <b><h2>Get in touch</h2></b>
                        <b>_____</b>
                    </div>
                    <div>
                        <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
                            <HelperTextMisaligned
                                helperText="Please enter your name"

                                label="Name"
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
                            <HelperTextMisaligned
                                helperText="Enter your email"
                                label="Email"
                            />
                        </Box>

                        <div style={{ marginLeft: "25px" }}>
                            <label >Messege</label><br />
                            <Textarea
                                maxRows={4}
                                defaultValue="Hello! Amshu Man."
                            /><br />
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </div>

                    </div>
                </div>
                <div id='right'>
                    {/* <img id='imgcontact' src={getin} alt='get-in-touch' /> */}
                    {/* <img id='imgcontact' src={sun} alt='IMAGE' /> */}
                    <img id='imgcontact' src={contact} alt='IMAGE' />
                </div>
            </div>
            <div>
                <strong>Address : </strong>
                <span>Pharping, Kathmandu</span><br />
                <strong>Tel : </strong>
                <span>9866545875</span><br />
                <strong>Email : </strong>
                <span>amshumanmaharjan@gmail.com</span><br />
                <strong>Working Hour : </strong>
                {/* <span>Mon-Fri 9am-5pm</span><br /> */}
                <span>Not yet working</span><br />
            </div>
        </>
    )
}