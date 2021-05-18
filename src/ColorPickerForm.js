import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import PaletteFormNav from "./PaletteFormNav";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import arrayMove from "array-move";

export default class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", newColorName: "" };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const { paletteFull } = this.props;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator
            value={this.state.newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Color name must be unique",
              "Color must be unique",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={paletteFull}
            style={{ backgroundColor: this.state.currentColor }}
          >
            {paletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
