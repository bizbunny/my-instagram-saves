import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

// markup
export default function GravityFallsPage(){
  return (
    <Layout pageTitle="Gravity Falls">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Gravity Related Stuff</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CHfqJr3FE9M/">
                            <img src="https://preview.redd.it/8ktm40yhc5f61.jpg?auto=webp&s=26edd770a22a1623bcdc043faa46e97b8a662216" alt="Gravity Falls"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}