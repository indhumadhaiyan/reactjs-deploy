import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Link , useNavigate} from "react-router-dom";
import Logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div>
      <ResponsiveNavbar />
    </div>
  );
}

const ResponsiveNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();
  const handleScrollToSection = (id) => {
    navigate('/'); // Assuming the section is on the home page

    // Wait for navigation to complete, then scroll to the section
    setTimeout(() => {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust delay to ensure navigation completes
  };
  return (
    <AppBar id="bg" position="fixed">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 600, display:"flex" }}>
          <img src={Logo} alt="" style={{ width: "90px", height: "40px" }} />
          <h1 style={{fontSize:"1.3rem"}} className="mt-2"  id="para">Edit Everest Productions</h1>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/about"}>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/contact"}>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/services"}>
                <MenuItem onClick={handleClose}>Services</MenuItem>
              </Link>
              
            </Menu>
          </>
        ) : (
          <>
            <ul style={{ textDecoration: "none" }} className="flex gap-12 mt-2">
              <li id="par" style={{ fontSize: "17px", textDecoration: "none" }} className="link-service">
                <Link style={{ textDecoration: "none",color: "white" }} to="/">
                  Home
                </Link>
              </li>
              <li id="par" style={{ fontSize: "17px" }}>
                <Link
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{ textDecoration: "none",color: "white" }}
                  >
                    Services
                  </Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <Link  to={"/virtual-dusk"}>
                      <MenuItem onClick={handleLinkClick}>Virtual Dusk</MenuItem>
                    </Link>
                    <Link to={"/photo-editing"}>
                      <MenuItem onClick={handleLinkClick}>Retouching</MenuItem>
                    </Link>
                    <Link to={"/virtual-staging"}>
                      <MenuItem onClick={handleLinkClick}>Virtual Staging</MenuItem>
                    </Link>
                    <Link to={"/photo-editing"}>
                      <MenuItem onClick={handleLinkClick}>Photo Editing</MenuItem>
                    </Link>
                    <Link to={"/lawn-replacement"}> 
                      <MenuItem onClick={handleLinkClick} >Lawn Replacement</MenuItem>
                    </Link>
                    <Link to={"/video-editing"}> 
                      <MenuItem onClick={handleLinkClick}>Video Editing</MenuItem>
                    </Link>                     
                  </Menu>
                </li>  
                <li id="par" style={{ fontSize: "17px" }} className="link-service">
                  <button
                    style={{ textDecoration: "none", color: "white", background: "none", border: "none", cursor: "pointer" }}
                    onClick={() => handleScrollToSection('contact')}
                  >
                    Contact
                  </button>
                </li>
              <li id="par" style={{ fontSize: "17px" }} className="link-service">
                <Link style={{ textDecoration: "none",color: "white" }} to="/about" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
