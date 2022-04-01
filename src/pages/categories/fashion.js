import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

// markup
export default function FashionPage(){
  return (
    <Layout pageTitle="Fashion">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Fashion reference for drawing purposes or just to look at</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CHNhLzIhAty/">
                            <img src="https://64.media.tumblr.com/92966681bb040f7c515528f81f34e83b/b2a5f853e7354660-a9/s500x750/763c3f7f02d1cbe649d72f048d68b4efcd70a535.jpg" alt="@whatmyboyfriendwore"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}