import React from "react"
import "./footer.css"
import {Link} from "gatsby"
import {
    Container,
    Grid,
    Typography
  } from "@mui/material";

export default function Footer() {
    return(
        <>
            <footer className="footer">
                <section>
                    <Container maxWidth="lg">
                        <Typography component="h2" variant="h2" className="header" align="left">
                            WIP
                        </Typography>
                    </Container>
                    <Container maxWidth="lg" className="footer-container">
                        <Grid container spacing={5} className="footer-nav">
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Typography component="p" style={{paddingBottom: '20px'}}>
                                    This is still a work in progress.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </footer>
        </>
    )
}