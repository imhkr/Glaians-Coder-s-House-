import react, { useEffect, useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";

// import { addUser } from "../../Service/api";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addUser } from "../../Service/api";
import { useSelector } from "react-redux";
import TextInput from "../shared/TextInput/TextInput";
import Card from "../shared/Card/Card";
import styles from "./AllUsers.module.css";
const initialValue = {
  Heading: "",
  Content: "",
  Category: "",
  CreatorId: "",
  CreatorName: "",
};

const Container = styled(FormGroup)`
    text-color:"red";
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
  const history = useHistory();
  const [data, setData] = useState(initialValue);
  let { Heading, Content, Category, CreatorId, CreatorName } = data;
  const { user } = useSelector((state) => state.auth);
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const obj = {
    Heading: Heading,
    Content: Content,
    Category: Category,
    CreatorName: user.name,
    CreatorId: user.id,
  };
  const addUserDetails = async () => {
    await addUser(obj);
  };
  const redirect = () => {
    history.push(`/all`);
  };

  return (
    <>
      <Card title="What’s your full name?" icon="goggle-emoji">
        <label for="html">Heading</label>

        <TextInput
          onChange={(e) => onValueChange(e)}
          name="Heading"
          value={Heading}
          id="my-input"
        />
        <TextInput value="FullName" type="textField" />
        <TextInput value="FullName" />
        <TextInput value="FullName" />
        <p className={styles.paragraph}>Please use your real name 🙏</p>
        <div>
          <Button text="Next" />
        </div>
      </Card>

      {
        "" /* <Container>
        <Typography variant="h4">Add Post</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Heading</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Heading"
            value={Heading}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Content</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Content"
            value={Content}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Category</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Category"
            value={Category}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">CreatorName</InputLabel>
          <Input name="CreatorName" value={user.name} id="my-input" />
        </FormControl>

        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={function (event) {
              addUserDetails();
              redirect();
            }}
          >
            Add User
          </Button>
        </FormControl>
      </Container> */
      }
    </>
  );
};

export default AddUser;