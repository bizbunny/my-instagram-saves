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
export default function MarvelPage(){
  return (
    <Layout pageTitle="Marvel">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <h4>Marvel Related Stuff</h4>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CKk2vdcDCt-/">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bytrmmgmyzdmtzgezzi00y2u1lthhnzctytm1mgmzogqwngvmxkeyxkfqcgdeqxvymdi2ndg0nqatat-v1-sy1000-cr0-0-674-1000-al-1571406571.jpg?crop=0.867xw:0.732xh;0.0629xw,0.0287xh&resize=980:*" alt="Spiderman"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CAVY90yg8ZO/">
                        <Tooltip title="Play Video" arrow placement="top" followCursor>
                            <img src="https://pbs.twimg.com/profile_banners/575415904/1627833878/1500x500" alt="Loki and Bucky Fanart"/>
                        </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Marvel Related Sub-Categories</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="../Nightcrawler">
                        <Tooltip title="NightCrawler" arrow placement="top" followCursor>
                            <img src="https://pbs.twimg.com/media/Ea9qITWVcAAS5Jh.jpg" alt="Kevin Wada Nightcrawler Art"/>
                        </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}