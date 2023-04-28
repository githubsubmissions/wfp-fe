import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {Status} from "../../../domain/enums/Status";
import {useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";
import AlertDataRepositoryImpl from "../../../infrastructure/repositories/AlertDataRepositoryImpl";


const EditItemDialog = (props: {
    onClose: () => void;
    open: boolean;
    allItems: any;
    setItems: any;
    editData: any;
    itemCategories: any;
    setItemCategories: any;
}) => {
    const navigate = useNavigate();
    const itemService = new AlertDataRepositoryImpl();

    const {open, onClose, allItems, setItems, editData, itemCategories} = props;

    return (

        <React.Fragment>
            <Dialog open={open}
                    onClose={onClose}
                // TransitionComponent={Transition}
                    fullWidth
                    maxWidth='md'
            >
                <DialogTitle>Edit Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/*{`${dialogOperation.charAt(0).toUpperCase()}${dialogOperation.substring(1)}`} an employee.*/}
                    </DialogContentText>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {md: 1},
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // onSubmitHandler(e);
                        }}
                    >
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Category"
                                    variant="filled" name='itemCategoryId'
                                    fullWidth select focused required
                                    // color={(dialogOperation === "edit") ? editColor : addColor}
                                    defaultValue={editData?.itemCategoryId}
                                >
                                    {itemCategories && itemCategories.map((itemCategory: any) =>
                                        <MenuItem key={itemCategory?.id} value={itemCategory?.id}>
                                            {itemCategory?.name}
                                        </MenuItem>
                                    )}
                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Name" focused fullWidth required
                                           type="text"
                                           variant="filled"
                                           name="itemName"
                                    // color={(dialogOperation === "edit") ? editColor : addColor}
                                           defaultValue={editData?.name}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Price"
                                           name="price"
                                           fullWidth focused required
                                           variant="filled"
                                           type="number"
                                    // color={(dialogOperation === "edit") ? editColor : addColor}
                                           defaultValue={editData?.price}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Status"
                                    variant="filled" name='status'
                                    fullWidth select focused
                                    // color={(dialogOperation === "edit") ? editColor : addColor}
                                    defaultValue={editData?.status}
                                >
                                    <MenuItem
                                        value={Status.ENABLED.toString()}>Enabled</MenuItem>
                                    <MenuItem
                                        value={Status.DISABLED.toString()}>Disabled</MenuItem>
                                    <MenuItem
                                        value={Status.DELETED.toString()}>Deleted</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Minimum Stock Level"
                                           name="minStockLevel"
                                           fullWidth focused
                                           variant="filled"
                                           type="number"
                                    // color={(dialogOperation === "edit") ? editColor : addColor}
                                           defaultValue={editData?.minStockLevel}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Image Path"
                                           name="imagePath"
                                           fullWidth focused
                                           variant="filled"
                                    // color={(dialogOperation === "edit") ? editColor : addColor}
                                           defaultValue={editData?.imagePath}
                                />
                            </Grid>
                        </Grid>

                        <DialogActions>
                            <Button onClick={onClose}
                                    variant="outlined"
                                    color="error">
                                Cancel
                            </Button>

                            <Button type="submit"
                                    variant="outlined"
                                    color="success">
                                Confirm
                            </Button>

                        </DialogActions>

                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default EditItemDialog;
