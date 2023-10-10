import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Create: React.FC = () => {
    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <TextField
                fullWidth
                sx={{ maxWidth: 600 }}
                label="First Name"
                margin="dense"
            />
            <TextField
                fullWidth
                sx={{ maxWidth: 600 }}
                label="Last Name"
                margin="dense"
            />
            <TextField
                fullWidth
                sx={{ maxWidth: 600 }}
                label="Address"
                margin="dense"
            />
            <TextField
                fullWidth
                sx={{ maxWidth: 600 }}
                label="Number"
                margin="dense"
                type="number"
            />
            <FormControl sx={{ marginTop: 1, marginBottom: 0.7 }}>
                <InputLabel id="type-label">Work</InputLabel>
                <Select
                    sx={{ maxWidth: 600 }}
                    margin="dense"
                    type="select"
                    labelId="type-label"
                    label="Work"
                >
                    <MenuItem value="employed">Employed</MenuItem>
                    <MenuItem value="unemployed">Unemployed</MenuItem>
                </Select>
            </FormControl>
            <TextField
                fullWidth
                sx={{ maxWidth: 600 }}
                label="Company"
                margin="dense"
            />
            <TextField
                fullWidth
                sx={{ maxWidth: 600 }}
                label="Role"
                margin="dense"
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    maxWidth: "600px",
                    padding: "10px",
                    backgroundColor: "#67BE23",
                    color: "white",
                    marginTop: "5px",
                }}
            >
                Submit
            </Button>
        </form>
    );
};

export default Create;