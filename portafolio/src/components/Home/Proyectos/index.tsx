import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

import { IProyecto, proyectos } from "./proyectos";

export default function Proyectos() {
  const theme = useTheme();

  return (
    <Box>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ marginBottom: 10 }}
          textAlign="center"
        >
          Proyectos
        </Typography>
        <Grid container spacing={3}>
          {proyectos.map((p: IProyecto) => (
            <Grid item xl={4} xs={12}>
              <Card variant="elevation" sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  src={p.image}
                  alt="radio100.cl"
                />
                <CardContent sx={{ padding: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color={theme.palette.text.primary}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Descripción:</span>{" "}
                    {p.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Visitar:</span>{" "}
                    <Link
                      href={p.link}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        fontSize: 21,
                      }}
                    >
                      {" "}
                      {p.link}
                    </Link>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Puesto:</span>{" "}
                    {p.puesto}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
                    {p.tecnologias}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} xl={5}>
                      {p.repositorio ? (
                        <Link
                          href={p.repositorio}
                          target="_blank"
                          sx={{ textDecoration: "none", color: "#fff" }}
                        >
                          <Button
                            variant="contained"
                            color="success"
                            sx={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            size="large"
                          >
                            <GitHubIcon sx={{ marginRight: 1 }} /> Repositorio
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="contained"
                          color="success"
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          size="large"
                        >
                          <GitHubIcon sx={{ marginRight: 1 }} /> Privado
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}