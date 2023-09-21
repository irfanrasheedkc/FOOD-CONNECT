import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const HomePage = () => {
  let a = [];
  for (let i = 0; i < 12; i++) {
    a[i] = i;
  }

  return (
    <div>
      <NavBar />
      <Card className="mx-6 mt-10">
        <CardBody className="flex flex-wrap justify-evenly gap-8">
          {a.map((element, index) => (
            <Card key={index} className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=" hover:scale-150"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to='/checkout'>
                  <Button color="amber" className="text-white">
                    Order
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;
