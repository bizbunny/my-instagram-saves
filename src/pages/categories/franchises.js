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
export default function FranchisesPage(){
  return (
    <Layout pageTitle="Franchises I Follow">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Different franchises I'm a fan of</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="../Disney">
                            <Tooltip title="Disney" arrow placement="top" followCursor>
                                <img src="https://i.pinimg.com/originals/ae/85/66/ae85663a84de6806e515257a8e1e6ea2.jpg" alt="Mulan"/>
                            </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="../GravityFalls">
                            <Tooltip title="Gravity Falls" arrow placement="top" followCursor>
                                <img src="https://preview.redd.it/8ktm40yhc5f61.jpg?auto=webp&s=26edd770a22a1623bcdc043faa46e97b8a662216" alt="Gravity Falls"/>
                            </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}