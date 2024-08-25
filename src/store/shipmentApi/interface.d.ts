interface IShipmentData {
  name: string;
  origin_city: string;
  origin_country: string;
  origin_state: string;
  destination_city: string;
  destination_country: string;
  destination_state: string;
  status: string;
  company: string;
}
interface IShipmentResponse {
  message: IShipmentData[];
}

interface IShipment {
  doctype: string;
  fields: any;
}
