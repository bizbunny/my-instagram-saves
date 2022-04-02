import * as React from "react";
import "../../components/styles.css";
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import {
    Container,
    Grid
} from "@mui/material";

import Tooltip from '@mui/material/Tooltip';

// markup
export default function CoolArtPage(){
  return (
    <Layout pageTitle="Cool Art">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <h4>Art from artists I like</h4>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CG2Gs_aAY0x/">
                        <Tooltip title="Play Video" arrow placement="top" followCursor>
                            <img src="https://pbs.twimg.com/profile_banners/575415904/1627833878/1500x500" alt="Miu_akatsuki stuff"/>
                            </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Artists I like</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="../KevinWadaArt">
                        <Tooltip title="Kevin Wada Art" arrow placement="top" followCursor>
                            <img src="https://64.media.tumblr.com/92211e490869f2eaea530a01124dfed9/tumblr_pfb3z2Ipsg1qbkgzfo1_1280.jpg" alt="Bucky"/>
                            </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}