import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  return (
    <div className="flex justify-center my-10">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              onChange={(e) => {
                setLoginDetails({ ...loginDetails, email: e.target.value });
              }}
              color="blue"
              label="Email"
              size="lg"
            />
            <Input
              onChange={(e) => {
                setLoginDetails({ ...loginDetails, password: e.target.value });
              }}
              color="blue"
              label="Password"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox color="blue" label="Remember Me" />
            </div>
            <Button type="submit" color="blue" variant="gradient" fullWidth>
              Sign In
            </Button>
          </form>
        </CardBody>

        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to="/signuporg" className="text-blue-500 font-bold">
              Signup
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
