import {
  Card,
  CardBody,
  
  Typography,
  
} from "@material-tailwind/react";
 
export default function PricingBlock(props) {
  return (
    <Card className="  service group relative flex px-8 py-5 rounded-md duration-300 hover:bg-gray-50 before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300 after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300 ">
      <CardBody>
      <img src={props.profileImg} alt="" />
        <Typography variant="h5" color="blue-gray" className="font-semibold font-monter text-base mb-3">
          {props.title}
        </Typography>
        <Typography className="font-monter">
          {props.content}
        </Typography>
      </CardBody>
      
    </Card>
  );
}