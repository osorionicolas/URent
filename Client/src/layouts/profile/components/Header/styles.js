/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, functions, boxShadows }) => {
  const { white } = palette;
  const { rgba, pxToRem } = functions;
  const { navbarBoxShadow } = boxShadows;

  return {
    profileHeader_background: {
      minHeight: pxToRem(150),
    },

    profileHeader_profile: {
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor: rgba(white.main, 0.8),
      boxShadow: navbarBoxShadow,
      margin: `${pxToRem(-64)} ${pxToRem(24)} 0`,
      padding: pxToRem(16),
      position: "relative",
    },
  };
});
