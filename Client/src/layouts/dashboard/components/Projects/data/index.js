// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";
import Icon from "@mui/material/Icon";
import SuiBadge from "components/SuiBadge";

// eslint-disable-next-line react/prop-types
function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} gradient noLabel />
      </SuiBox>
    </SuiBox>
  );
}

export default function data() {
  const action = (
    <Icon className="font-bold text-secondary cursor-pointer" fontSize="small">
      more_vert
    </Icon>
  );

  return {
    columns: [
      { name: "companies", align: "left" },
      { name: "budget", align: "center" },
      { name: "status", align: "center" },
      { name: "employed", align: "center" },
      { name: "completion", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: [
      {
        companies: [null, "Soft UI XD Version"],
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $14,000
          </SuiTypography>
        ),
        status: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            23/04/18
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
        action,
      },
      {
        companies: [null, "Add Progress Track"],
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $3,000
          </SuiTypography>
        ),
        status: (
          <SuiBadge
            variant="gradient"
            badgeContent="offline"
            color="secondary"
            size="extra-small"
          />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            23/04/18
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={10} color="info" gradient />
          </SuiBox>
        ),
        action: (
          <SuiTypography
            component="a"
            href="#"
            variant="caption"
            textColor="secondary"
            fontWeight="medium"
          >
            Edit
          </SuiTypography>
        ),
      },
      {
        companies: [null, "Fix Platform Errors"],
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Not set
          </SuiTypography>
        ),
        status: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            23/04/18
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" gradient />
          </SuiBox>
        ),
        action,
      },
      {
        companies: [null, "Launch our Mobile App"],
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $20,500
          </SuiTypography>
        ),
        status: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            23/04/18
          </SuiTypography>
        ),
        completion: <Completion value={80} color="info" />,
        action,
      },
      {
        companies: [null, "Add the New Pricing Page"],
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $500
          </SuiTypography>
        ),
        status: (
          <SuiBadge
            variant="gradient"
            badgeContent="offline"
            color="secondary"
            size="extra-small"
          />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            23/04/18
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={25} color="info" gradient />
          </SuiBox>
        ),
        action,
      },
      {
        companies: [null, "Redesign New Online Shop"],
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $2,000
          </SuiTypography>
        ),
        status: (
          <SuiBadge
            variant="gradient"
            badgeContent="offline"
            color="secondary"
            size="extra-small"
          />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            23/04/18
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={40} color="info" gradient />
          </SuiBox>
        ),
        action,
      },
    ],
  };
}
