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
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}