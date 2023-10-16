import type { Theme } from "@mui/material";

// ----------------------------------------------------------------------

export default function Avatar(theme: Theme) {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          "&:first-of-type": {
            fontSize: 14,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
          },
        },
      },
    },
  };
}
