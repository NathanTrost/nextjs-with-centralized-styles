import FormGroup from "carbon-components-react/lib/components/FormGroup";
import Form from "carbon-components-react/lib/components/Form";
import { Grid, Column, Row } from "carbon-components-react/lib/components/Grid";
import Select from "carbon-components-react/lib/components/Select";
import SelectItem from "carbon-components-react/lib/components/SelectItem";
import TextInput from "carbon-components-react/lib/components/TextInput";
import Button from "carbon-components-react/lib/components/Button";
import ButtonSet from "carbon-components-react/lib/components/ButtonSet";

const Content = () => {
  return (
    <Form>
      <FormGroup>
        <Grid>
          <Row>
            <Column>
              <TextInput />

              <Select id="select-1" defaultValue="placeholder-item">
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Choose an option"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </Column>

            <Column>
              <ButtonSet stacked={true}>
                <Button kind="secondary">Reset</Button>
                <Button kind="primary">Submit</Button>
              </ButtonSet>
            </Column>
          </Row>
        </Grid>
      </FormGroup>
    </Form>
  );
};

export default Content;
