import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getUser, editUser } from "../../Service/api";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const initialValue = {
  Heading: "",
  Content: "",
  Category: "",
  CreatorId: "",
  CreatorName: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
  const history = useHistory();
  const [data, setData] = useState(initialValue);
  let { Heading, Content, Category, CreatorId, CreatorName } = data;
  const { id } = useParams();
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
  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    console.log(response);
    setData(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, data);
  };
  const redirect = () => {
    history.push(`/all`);
  };

  return (
    <Container>
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
            editUserDetails();
            redirect();
          }}
        >
          Update User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
