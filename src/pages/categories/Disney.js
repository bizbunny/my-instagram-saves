import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

// markup
export default function DisneyPage(){
  return (
    <Layout pageTitle="Disney">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Disney Related Stuff</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/BViFlW2FoJo/">
                            <img src="https://i.pinimg.com/originals/ae/85/66/ae85663a84de6806e515257a8e1e6ea2.jpg" alt="Mulan"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}