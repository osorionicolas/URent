// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";

function Overview() {
  const realty = [
    {
      image: homeDecor1,
      label: "project #2",
      title: "modern",
      description: "As Uber works through a huge amount of internal management turmoil.",
      action: {
        type: "internal",
        route: "/pages/realty/realty-overview",
        color: "info",
        label: "view project",
      },
    },
    {
      image: homeDecor2,
      label: "project #1",
      title: "scandinavian",
      description:
        "Music is something that every person has his or her own specific opinion about.",
      action: {
        type: "internal",
        route: "/pages/realty/realty-overview",
        color: "info",
        label: "view project",
      },
    },
    {
      image: homeDecor3,
      label: "project #3",
      title: "minimalist",
      description: "Different people have different taste, and various types of music.",
      action: {
        type: "internal",
        route: "/pages/realty/realty-overview",
        color: "info",
        label: "view project",
      },
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Realty
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              {realty.map((property) => (
                <Grid item xs={12} sm={6} md={3}>
                  <DefaultProjectCard
                    image={property.image}
                    label={property.label}
                    title={property.title}
                    description={property.description}
                    action={property.action}
                    authors={property.authors}
                  />
                </Grid>
              ))}
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
