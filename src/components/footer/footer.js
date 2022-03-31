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
                            Want to Know More?
                        </Typography>
                    </Container>
                    <Container maxWidth="lg" className="footer-container">
                        <Grid container spacing={5} className="footer-nav">
                            <Grid item lg={5} md={6} sm={7} xs={12}>
                                <Typography component="p" style={{paddingBottom: '20px'}}>
                                    Zril decore quodsi et duo, mei eu atqui labore. Id nibh gubergren his, nec novum graeco maluisset ex. Recusabo rationibus mnesarchum sed ea. Ea affert persius tacimates quo, eu vis mollis vituperata, ex dicant quaerendum mei. Philosophia instructior eam et, sed case denique disputando ex.
                                </Typography>
                            </Grid>
                            <Grid item lg={7} md={6} sm={7} xs={12}>
                                <Grid container spacing={4} flex-wrap="wrap" className="align-end">
                                    <Grid item lg={3} md={5} sm={3} xs={6}>
                                        <Typography variant="h6" className="header" gutterBottom component="h6">
                                            My Socials
                                        </Typography>
                                        <ul className="list">
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                    Twitter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                    Instagram
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                    Discord
                                                </Link>
                                            </li>
                                        </ul>
                                    </Grid>
                                    <Grid item lg={3} md={5} sm={3} xs={6}>
                                        <Typography variant="h6" className="header" gutterBottom component="h6">
                                            Pellentesque 
                                        </Typography>
                                        <ul className="list">
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                pretium
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                Suspendisse 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                lectus
                                                </Link>
                                            </li>
                                        </ul>
                                    </Grid>
                                    <Grid item lg={3} md={5} sm={3} xs={6}>
                                        <Typography variant="h6" className="header" gutterBottom component="h6">
                                        Phasellus
                                        </Typography>
                                        <ul className="list">
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                placerat justo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                Pellentesque 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                Mauris elementum
                                                </Link>
                                            </li>
                                        </ul>
                                    </Grid>
                                    <Grid item lg={3} md={5} sm={3} xs={6}>
                                        <Typography variant="h6" className="header" gutterBottom component="h6">
                                        sollicitudin elit
                                        </Typography>
                                        <ul className="list">
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                Suspendisse 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                aliquet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link" to="#" component="a">
                                                rhoncus 
                                                </Link>
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </footer>
        </>
    )
}