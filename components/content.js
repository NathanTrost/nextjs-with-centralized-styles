import { useState } from "react";
import { Box, Button, Form, FormField, Grid, TextInput, Select } from "grommet";

const Content = () => {
  const [formState, setFormState] = useState({
    selectInput: "",
    textInput: "",
  });

  const submitForm = (returnValue) => {
    console.log(returnValue);
  };

  const onChange = (value) => {
    console.log("onChange", value);
    debugger;
  };

  return (
    <>
      <h2>Grid Layout with form</h2>
      <Form onSubmit={submitForm} onReset={() => {}} onChange={() => {}}>
        <Grid
          align="stretch"
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "left", start: [0, 1], end: [0, 1] },
            { name: "right", start: [1, 1], end: [1, 1] },
          ]}
          columns={["medium", "medium"]}
          gap="medium"
          rows={["xsmall", "xsmall"]}
        >
          <Box gridArea="header">Form Header</Box>
          <Box gridArea="left" align="baseline" alignSelf="center">
            <FormField
              alignContent="center"
              name="textInput"
              htmlfor="textInput-id"
            >
              <TextInput
                id="textInput-id"
                name="textInput"
                onChange={onChange}
                placeholder="Text Input"
                value={formState.textInput}
              />
            </FormField>
            <FormField name="selectInput" htmlfor="selectInput-id">
              <Select
                id="selectInput-id"
                name="selectInput"
                onChange={onChange}
                placeholder="Select Input"
                options={["Luke", "Leia", "Han"]}
                value={formState.selectInput}
              />
            </FormField>
          </Box>
          <Box
            gridArea="right"
            // align="baseline"
            alignContent="end"
            alignSelf="center"
          >
            <Button type="submit" primary label="Submit" />
            <br />
            <Button type="reset" label="Reset" />
          </Box>
        </Grid>
      </Form>
    </>
  );
};

export default Content;
