import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

// markup
export default function KevinWadaPage(){
  return (
    <Layout pageTitle="Cool Art">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Art by Kevin Wada</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CKCGrlAnIHd/">
                            <img src="https://64.media.tumblr.com/92211e490869f2eaea530a01124dfed9/tumblr_pfb3z2Ipsg1qbkgzfo1_1280.jpg" alt="Bucky"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CLpSSNYH8gt/">
                            <img src="https://www.g-mart.com/static/f143134.jpg" alt="DC Bombshells"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CKUNwtaH7mM/">
                            <img src="https://64.media.tumblr.com/ed8ad63adf77453ff21eb18eace39db6/tumblr_pejf92vv051qbkgzfo1_1280.jpg" alt="Inanna (wicdiv)"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CNFskyoH4Ry/">
                            <img src="https://64.media.tumblr.com/3f873dc45913ee859bb003712376f6dc/tumblr_pr8sxiSc3Y1qbkgzfo1_1280.jpg" alt="Paper X-men Gambit"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}