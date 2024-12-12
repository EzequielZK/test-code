import DataContainer from "@/components/dataContainer";
import { Repo } from "@/lib/types/apiTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Star from "@mui/icons-material/Star";

type ReposViewProps = {
  repos: Repo[];
};

export default function ReposView({ repos }: ReposViewProps) {
  return (
    <Box py={3}>
      <DataContainer
        title="Repositórios"
        subtitle="Selecione um repositório para conferir seus detalhes e acessá-lo diretamente pelo link"
      >
        <Box pt={3} display="flex" flexDirection="column" gap={2}>
          {repos.map((repo, index) => (
            <Box key={index} display="flex" flexDirection="column" gap={2}>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" fontWeight={700}>
                    {" "}
                    {repo.name}
                  </Typography>
                  <Button variant="text" color="primary">
                    Ver Detalhes
                  </Button>
                </Box>
                <Typography variant="subtitle2">{repo.description}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    width={10}
                    height={10}
                    bgcolor="#fff"
                    borderRadius="50%"
                  />
                  <Typography variant="caption">{repo.lang}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Star fontSize="small" sx={{ color: "yellow" }} />
                  <Typography variant="caption">{repo.rating}</Typography>
                </Box>
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
      </DataContainer>
    </Box>
  );
}
