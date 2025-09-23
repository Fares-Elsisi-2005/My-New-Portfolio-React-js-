import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup"; 
import axios from "axios";
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import { toast } from 'react-toastify';


const initialValues = {
  Name: "",
  email: "",
  contact: "",
  Message: "",
};


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const userSchema = yup.object().shape({
    Name: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"), 
    Message: yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
     

});


const ContactForm = () => {
    const isMobile = useMediaQuery("(max-width:800px)");
    const handleFormSubmit = async (values, { resetForm }) => {
    const templateId ="template_qu2vkw7";     // from EmailJS dashboard
    const  serviceId = "service_tp3amgs";   // from EmailJS dashboard
    const publicKey =  import.meta.env.VITE_PUBLIC_KEY;     // from EmailJS dashboard

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey, // this is your Public Key
        template_params: {
        from_name: values.Name,
        from_email: values.email,
        contact: values.contact,
        message: values.Message,
        },
    };

  try {
    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("SUCCESS!", res.data);
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", 
        });
    resetForm();
  } catch (err) {
    console.error("FAILED...", err);
      toast.error('Something went wrong. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }
};
    return (
        

        <Box  sx={{boxSizing:"border-box"}}  display={"flex"} justifyContent={"center"} alignItems={"center"} mb={"80px"} p="30px" >

            <Box maxWidth={"1100px"} backdropFilter={'blur(20px)'} backgroundColor={"#093e6198"} p="25px" borderRadius={"10px"} display={"flex"} flexDirection={isMobile ? "column" : "row"} justifyContent={"center"} alignItems={"center"} gap={"30px"} m={"30px"} sx={{ boxShadow: " rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px", }}>
                <Box
                    sx={{
                    width: isMobile ? "100%" : "50%" ,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection:"column",
                        gap: "30px",
                        order: isMobile ? "3" : "0",
                      textAlign:"center"
                    
                }}> 
                    {!isMobile ? <Typography className="TNeon" variant={"h3"}>Let’s discuss your Project</Typography> : null}
                    <Typography sx={{fontSize:"20px", fontStyle:"italic",color:"#f2eeeeec", maxWidth:"400px"}} mb={"30px"}>I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.</Typography>
                    
                <Box 
                     sx={{
                            backgroundColor: "#0402021a",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                            textAlign: "center",
                            width: "270px",
                            transition: "0.7s ease",
                            "&:hover": {
                                transform:"scale(1.1)"
                         },
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                            gap:"20px"
                            
                        }}
                 >
                    <i    style={{fontSize:"30px"}} className="fa-solid fa-location-pin TNeon"></i>
                    <Box fontStyle={"italic"}>
                        <Typography >Address:</Typography>
                        <Typography>Egypt/Cairo</Typography>
                         
                    </Box>
                </Box>
                <Box   
                     sx={{
                            backgroundColor: "#0402021a",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                            textAlign: "center",
                            minWidth: "270px",
                            transition: "0.7s ease",
                            "&:hover": {
                                transform:"scale(1.1)"
                         },
                         display: "flex",
                         justifyContent: "center",
                            alignItems:"center",
                            gap:"20px"
                        }}
                 >
                    <i style={{fontSize:"30px"}} class="fa-solid fa-envelope TNeon"></i>
                    <Box fontStyle={"italic"}>
                        <Typography >My Email:</Typography>
                        <Typography>fareselsisi35@gmail.com</Typography>
                    </Box>
                </Box>
                
                <Box  
                     sx={{
                            backgroundColor: "#0402021a",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                            textAlign: "center",
                            width:"270px",
                            transition: "0.7s ease",
                            "&:hover": {
                                transform:"scale(1.1)"
                         },
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         gap: "20px",
                           
                            
                        }}
                 >
                    <i style={{fontSize:"30px"}} class="fa-solid fa-phone-flip TNeon"></i>
                    <Box fontStyle={"italic"}>
                        <Typography >My phone:</Typography>
                        <Typography>01013353405</Typography>
                    </Box>
                    </Box>
                    
                     <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 , mb:"30px"}}>
                                <Tooltip title="linkedin">
                                    <IconButton   component="a" href="https://www.linkedin.com/in/fares-elsisi-613732321/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon className='TNeonlinkedinSvg' /></IconButton>
                    
                                </Tooltip>
                                <Tooltip title="github">
                                    <IconButton   component="a" href="https://github.com/Fares-Elsisi-2005" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon className='TNeonGithupSvg' /></IconButton>
                    
                                </Tooltip>
                                <Tooltip title="instagram">
                                    <IconButton   component="a" href="https://www.instagram.com/fareselsise?igsh=MW55dGduM3FiZzY3aQ==" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon className='TNeonInstagramSvg' /></IconButton>
                    
                                </Tooltip>
                                {/* <Tooltip title="telegram">
                                  <IconButton   component="a" href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon className='TNeonTelegramSvg' /></IconButton>
                    
                                </Tooltip> */}
                                
                            </Stack>
                
                

                </Box>
                <Box sx={{
                    order: isMobile?"1":"0" , width: isMobile ? "100%" : "50%", display:"flex",justifyContent:"space-between",textAlign:"center",flexDirection:"column",gap:"30px",mb:"20px" }} p="20px" borderRadius={"10px"}>
                    {isMobile ? <Typography className="TNeon" variant={"h3"}>Let’s discuss your Project</Typography> : null}
                   
                    <Typography sx={{fontSize:"20px",fontStyle:"italic", color:"#f2eeeeec"}} >I'm always open to discussing product design work or partnership opportunities.</Typography>
 
                
                <Formik
                     onSubmit={(values, actions) => handleFormSubmit(values, actions)}
                        initialValues={initialValues}
                        validationSchema={userSchema}
                >

                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => ( 
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0,1fr))"
                                    width={"100%"}
                                

                            >
                                
                                <TextField
                                fullWidth
                                variant="filled"
                                label="Name"
                                name="Name"
                                value={values.Name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.Name && !!errors.Name}
                                helperText={touched.Name && errors.Name}
                                sx={{
                                    gridColumn: "span 4",

                                    // Label default (unfocused)
                                    "& .MuiInputLabel-root": {
                                    color: "#fff",
                                     
                                    },

                                    // Label focused
                                    "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgba(233, 241, 241, 1)",
                                    
                                    },

                                    // Label error
                                    "& .MuiInputLabel-root.Mui-error": {
                                    color: "#ED4337",
                                    textShadow: "0 0 8px #ED4337, 0 0 120px #ED4337",
                                    },

                                    // Input text color
                                    "& .MuiFilledInput-input": {
                                    color: "#fff",
                                    },

                                    // Unfocused underline
                                    "& .MuiFilledInput-underline:before": {
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
                                    },

                                    // Focused underline
                                    "& .MuiFilledInput-underline:after": {
                                    borderBottom: "2px solid rgba(244, 252, 252, 1)",
                                    boxShadow: "0 0 10px rgba(243, 245, 245, 1)",
                                    },

                                    // Error underline
                                    "& .MuiFilledInput-underline.Mui-error:after": {
                                    borderBottom: "2px solid #ED4337",
                                    boxShadow: "0 0 10px #ED4337",
                                    },
                                }}
                                />

    
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{
                                    gridColumn: "span 4",

                                    // Label default (unfocused)
                                    "& .MuiInputLabel-root": {
                                    color: "#fff",
                                     
                                    },

                                    // Label focused
                                    "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgba(233, 241, 241, 1)",
                                     
                                    },

                                    // Label error
                                    "& .MuiInputLabel-root.Mui-error": {
                                    color: "#ED4337",
                                    textShadow: "0 0 8px #ED4337, 0 0 120px #ED4337",
                                    },

                                    // Input text color
                                    "& .MuiFilledInput-input": {
                                    color: "#fff",
                                    },

                                    // Unfocused underline
                                    "& .MuiFilledInput-underline:before": {
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
                                    },

                                    // Focused underline
                                    "& .MuiFilledInput-underline:after": {
                                    borderBottom: "2px solid rgba(244, 252, 252, 1)",
                                    boxShadow: "0 0 10px rgba(243, 245, 245, 1)",
                                    },

                                    // Error underline
                                    "& .MuiFilledInput-underline.Mui-error:after": {
                                    borderBottom: "2px solid #ED4337",
                                    boxShadow: "0 0 10px #ED4337",
                                    },
                                }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Contact Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{
                                    gridColumn: "span 4",

                                    // Label default (unfocused)
                                    "& .MuiInputLabel-root": {
                                    color: "#fff",
                                     
                                    },

                                    // Label focused
                                    "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgba(233, 241, 241, 1)",
                                     
                                    },

                                    // Label error
                                    "& .MuiInputLabel-root.Mui-error": {
                                    color: "#ED4337",
                                    textShadow: "0 0 8px #ED4337, 0 0 120px #ED4337",
                                    },

                                    // Input text color
                                    "& .MuiFilledInput-input": {
                                    color: "#fff",
                                    },

                                    // Unfocused underline
                                    "& .MuiFilledInput-underline:before": {
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
                                    },

                                    // Focused underline
                                    "& .MuiFilledInput-underline:after": {
                                    borderBottom: "2px solid rgba(244, 252, 252, 1)",
                                    boxShadow: "0 0 10px rgba(243, 245, 245, 1)",
                                    },

                                    // Error underline
                                    "& .MuiFilledInput-underline.Mui-error:after": {
                                    borderBottom: "2px solid #ED4337",
                                    boxShadow: "0 0 10px #ED4337",
                                    },
                                }}
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                label="Message"
                                name="Message"
                                multiline
                                rows={6}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Message}
                                error={!!touched.Message && !!errors.Message}
                                helperText={touched.Message && errors.Message}
                                sx={{
                                gridColumn: "span 4",

                                // Label default (unfocused)
                                "& .MuiInputLabel-root": {
                                color: "#fff",
                                 
                                },

                                // Label focused
                                "& .MuiInputLabel-root.Mui-focused": {
                                color: "rgba(233, 241, 241, 1)",
                                 
                                },

                                // Label error
                                "& .MuiInputLabel-root.Mui-error": {
                                color: "#ED4337",
                                textShadow: "0 0 8px #ED4337, 0 0 120px #ED4337",
                                },

                                // Input text color
                                "& .MuiFilledInput-input": {
                                color: "#fff",
                                },

                                // Unfocused underline
                                "& .MuiFilledInput-underline:before": {
                                borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
                                },

                                // Focused underline
                                "& .MuiFilledInput-underline:after": {
                                borderBottom: "2px solid rgba(244, 252, 252, 1)",
                                boxShadow: "0 0 10px rgba(243, 245, 245, 1)",
                                },

                                // Error underline
                                "& .MuiFilledInput-underline.Mui-error:after": {
                                borderBottom: "2px solid #ED4337",
                                boxShadow: "0 0 10px #ED4337",
                                },
                            }}
                                />

    

                            </Box>

                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button type="submit"  className=" TNeonBtn" color="#fff" variant="outlined">
                                   <i style={{marginRight:"10px"}} class="fa-solid fa-paper-plane"></i> Send Message 
                                </Button>
                            </Box>
                        </form>
                    )}

                </Formik> 
                </Box>
            </Box>
       </Box>
        
    )
}

export default ContactForm;