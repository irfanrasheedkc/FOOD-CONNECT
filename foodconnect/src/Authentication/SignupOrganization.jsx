import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdGpsFixed } from "react-icons/md";

export default function SignupOrganization() {
  const [signupDetails, setSignupDetails] = useState({
    type: "",
    name: "",
    email: "",
    password: "",
    location: {
      latitude: "",
      longitude: "",
    },
  });

  const geoOptions = {
    enableHighAccuracy: true,
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setSignupDetails({
          ...signupDetails,
          location: {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          },
        });
        console.log(
          `Current Location: Latitude ${latitude}, Longitude ${longitude}`
        );
        console.log(signupDetails);
      },
      (error) => {
        console.error("Error getting current location:", error);
      },
      geoOptions
    );
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-fit p-5 my-10" color="transparent" shadow>
        <Typography variant="h4" color="blue-gray">
          Sign Up Organization
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(signupDetails);
          }}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Select
              value={signupDetails.type}
              onChange={(value) => {
                setSignupDetails({ ...signupDetails, type: value });
              }}
              color="blue"
              label="Select Version"
            >
              <Option value="Individual">Indivitual</Option>
              <Option value="Organization">Organization</Option>
            </Select>
            <Input
              onChange={(e) => {
                setSignupDetails({ ...signupDetails, name: e.target.value });
              }}
              color="blue"
              size="lg"
              label="Name"
            />
            <Input
              onChange={(e) => {
                setSignupDetails({ ...signupDetails, email: e.target.value });
              }}
              color="blue"
              size="lg"
              label="Email"
            />
            <Input
              onChange={(e) => {
                setSignupDetails({
                  ...signupDetails,
                  password: e.target.value,
                });
              }}
              color="blue"
              type="password"
              size="lg"
              label="Password"
            />
            <button
              onClick={getLocation}
              className="flex justify-start items-center w-fit p-2 shadow-xl rounded-lg hover:text-blue-400"
            >
              <MdGpsFixed />
              <Typography variant="h6" className="mx-3">
                Add Location
              </Typography>
            </button>
          </div>
          <Checkbox
            color="blue"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" color="blue" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <Link to="/login" className="font-bold text-blue-500">
              &nbsp;Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
