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
                        <Link to="https://www.instagram.com/p/CXFGZTYPy0e/">
                        <Tooltip title="Play Video" arrow placement="top" followCursor>
                            <img src="https://kongdog.us/wp-content/uploads/elementor/thumbs/Kongdog_Logo34-pg9680a5r77q4diz86lalzz8fx8kcp1hpouow5j8de.png" alt="Kong Dog"/>
                            </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CXt2lXqLqmz/">
                            <img src="https://www.originvietnam.com/wp-content/uploads/Son_Doong_Cave_Beautiful_Natural_Scenery_To_The_Soul_Of_Visitors_Header1.jpg" alt="Cave"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CHG8tGGndoM/">
                            <img src="https://www.chefspencil.com/wp-content/uploads/Gamja-Hotdog.jpg.webp" alt="Montreal Eats"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CEUChthn4u3/">
                            <img src="https://64.media.tumblr.com/c812d7788ee6b1439e1168512abe9448/5c32bb871cfe46b0-35/s500x750/a17771289cfe9b26dd4f89faf967df0bc058570f.jpg" alt="Austin, Texas"/>
                        </Link>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Link to="https://www.instagram.com/p/CA3fESdnSFQ/">
                            <img src="https://www.mtlblog.com/media-library/image.jpg?id=26885267&width=1245&quality=85&coordinates=120%2C0%2C120%2C0&height=700" alt="Montreal Eats"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}