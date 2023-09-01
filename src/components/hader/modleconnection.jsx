import Modal from "react-bootstrap/Modal";
import Connection from "./connection";
import Enrollment from "./enrollment";
import "./modleconnection.css";


function ModalConnection(props) {
 
  const { show, onHide } = props; // קבלת הפרופסים מהקומפוננטה האב

  return (
    <Modal
    show={show} onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header className="border border-0" closeButton />
      <div dir="rtl" className="row p-5 ">
    <div className="col-lg-6 ps-lg-4">   <Connection  onHide={props.onHide}/></div>
      <div className="col-lg-6 pe-lg-4 mt-5 mt-lg-0"> <Enrollment handleLoginSuccess={props.handleLoginSuccess}/></div>
       
      </div>
    </Modal>
  );
}

export default ModalConnection;