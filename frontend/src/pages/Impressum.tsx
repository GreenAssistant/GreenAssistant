import React from "react";
import "../styles/pages/pages.css";
import { Grid, ListItemText } from "@mui/material";
import { GitHub } from "@mui/icons-material";


interface ImpressumProps {
  open?: boolean,
  drawerWidth?: string,
}

export const Impressum: React.FC<ImpressumProps> = (props: ImpressumProps) => {
  return (
   <div className="pages-content">
      <section id="Impressum">
        <h1>Impressum</h1>
        <br />
        <Grid container rowSpacing={3} columnSpacing={{ xs: 5, sm: 7, md: 9 }}>
          <Grid item xs={6}>
            <section id="Mitwirkende">
              <h2>Mitwirkende</h2>
              <ul className="list-group list-group-flush">
                <ListItemText primary="Lara Gerlach" />
                <ListItemText primary="Kim Yen Pham" />
                <ListItemText primary="Markus Riffel" />
                <ListItemText primary="Dominik Wegner" />
                <ListItemText primary="Manuel Hagen" />
                <ListItemText primary="Lukas Konietzka" />
                <ListItemText primary="Theresa Mayer" />
                <ListItemText primary="Trang Nguyen" />
                <ListItemText primary="Marc Fischer" />
                <ListItemText primary="Stephan Schorer" />
              </ul>
            </section>
          </Grid>

          <Grid item xs={6}>
            <section id="Kontakt"></section>
            <h2>Kontakt</h2>
            <p>
              Prof. Dr. Anja Metzner
              <br />
              anja.metzner@tha.de <br />
              An der Hochschule 1<br />
              86161 Augsburg <br />
            </p>
            <p>Telefon:  +49 821 5586-3426 </p>
            <br />

            <section id="GitHub">
              <GitHub />
              <a href="link here">Folge uns auf Github!</a>
            </section>
          </Grid>
        </Grid>
      </section>
     </div>
  );
};