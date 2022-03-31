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
    <Layout pageTitle="Places to Visit">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Places to visit</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CXt2lXqLqmz/">
                            <img src="https://www.originvietnam.com/wp-content/uploads/Son_Doong_Cave_Beautiful_Natural_Scenery_To_The_Soul_Of_Visitors_Header1.jpg" alt="Cave"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CXFGZTYPy0e/">
                            <img src="https://kongdog.us/wp-content/uploads/elementor/thumbs/Kongdog_Logo34-pg9680a5r77q4diz86lalzz8fx8kcp1hpouow5j8de.png" alt="Kong Dog"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CXFGZTYPy0e/">
                            <img src="https://kongdog.us/wp-content/uploads/elementor/thumbs/Kongdog_Logo34-pg9680a5r77q4diz86lalzz8fx8kcp1hpouow5j8de.png" alt="Kong Dog"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}