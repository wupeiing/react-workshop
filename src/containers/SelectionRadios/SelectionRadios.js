import React from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { executeOperation } from "../../redux/modules/rolloutStatus";

const radiosText = [
  "Complete",
  "Ongoing",
  "Paused",
  "Failed",
  "Aborted",
  "All",
];

const SelectionRadios = ({ onOperationExecuted, selected }) => (
  <Form>
    <div style={{ margin: "12px" }}>
      {radiosText.map((text) => (
        <Form.Check
          inline
          label={text}
          value={text}
          type="radio"
          checked = {selected === text}
          onChange={(e) => onOperationExecuted(e.target.value)}
          key={`selection-radio-${text}`}
        />
      ))}
    </div>
  </Form>
);

const mapStateToProps = (state) => ({
  selected: state.rolloutStatus.status,
});

const mapDispatchToProps =  (dispatch) => ({
  onOperationExecuted: (status) => dispatch(executeOperation(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionRadios);