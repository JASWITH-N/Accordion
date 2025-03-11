import AccordionDisplay from "./Accordion";
import { Container, Row } from “react-bootstrap”;
function App() {
  return (
    <>
      <Container className="my-3">
        <Row>
         <AccordionDisplay 
           title="Here's a first title"
           arrowPosition="left"
           forceDefaultHide={true}
          >
           <div>
             Lorem ipsum dolor sit amet, consectetur adipiscing              
             elit, sed do eiusmod tempor incididunt ut labore et  
             dolore magna aliqua. Utenim ad minim veniam
           </div>
         </AccordionDisplay>
        </Row>
      </Container>
     </>
   )
}