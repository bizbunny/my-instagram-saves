import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

// markup
export default function ToReadPage(){
  return (
    <Layout pageTitle="To Read">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Stuff To Read</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CMjLcO0gL70/">
                            <img src="https://www.animeclick.it/immagini/manga/Navillera_Like_a_Butterfly/cover/Navillera_Like_a_Butterfly-cover.jpg" alt="Navillera"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}