import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

// markup
export default function NightCrawlerPage(){
  return (
    <Layout pageTitle="Nightcrawler">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>One of my favorite X-men</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CBqUallHIGw/">
                            <img src="https://pbs.twimg.com/media/Ea9qITWVcAAS5Jh.jpg" alt="Kevin Wada Nightcrawler Art"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/B3P8LTVjc7c/">
                            <img src="https://64.media.tumblr.com/c4fb764f8e6724a0cd0eb8aa27042a75/tumblr_nsqhg9DtWA1t4rhclo8_250.png" alt="Cute Meme"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/BtMeiIdBdfT/">
                            <img src="https://pbs.twimg.com/media/DyCKiVMXcAArDfY?format=jpg&name=medium" alt="Cool Art"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}