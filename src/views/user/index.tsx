import { UserDetailResponse } from "@/lib/types/apiTypes";
import Group from "@mui/icons-material/Group";
import Mail from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DataContainer from "@/components/dataContainer";
import Link from "next/link";

type UserSearchViewProps = {
  user: UserDetailResponse;
};

export default function UserSearchView({ user }: UserSearchViewProps) {
  return (
    <DataContainer>
      <Box py={3}>
        <Paper>
          <Box
            p={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Avatar
              alt={`Avatar de ${user.name}`}
              src={user.image}
              sx={{ width: 120, height: 120 }}
            />

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Box>
                <Typography
                  variant="h5"
                  color="initial"
                  textAlign="center"
                  fontWeight={700}
                >
                  {" "}
                  {user.name}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Group />
                  <Typography variant="subtitle2">
                    {user.followers} - Seguidor | Seguindo - {user.following}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Mail />
                  <Typography variant="subtitle2">{user.email}</Typography>
                </Box>
              </Box>
              <Typography variant="body1" textAlign="center" color="initial">
                {" "}
                {user.bio}
              </Typography>
              <Link href={`/${user.name}/repos`}>
                <Button variant="contained" color="primary">
                  Mostrar Repositórios
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </DataContainer>
  );
}
