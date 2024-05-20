import { Box, Button, Stack, TextField } from "@mui/material";

const SpecialtiesPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create Specialty</Button>
        {/* <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} /> */}
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
