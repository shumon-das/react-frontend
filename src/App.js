import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/headers/Header";
// import SidebarLeft from './components/Sidebar/SidebarLeft';
import Footer from "./components/Footer/Footer";
import Products from './components/products/Products';
import Product from './components/products/Product';
import Home from './components/home/Home';
import Users from './components/DataTable/Users';
import DATATable from './components/DataTable/DataTable';
import TeamPage from './components/AboutUs/Team';
import MyDropzone from './components/DragAndDrop/Dropzone';
import Upload from './components/DragAndDrop/FileUpload';
import CreateUser from './components/DataTable/createUser'
import BootstrapCarousel from './components/Sidebar/BootstrapCarousel';
import Sidebar from './components/Sidebar/Sidebar';
import Create from './components/Crud/create'
import Read from './components/Crud/read'
import Update from './components/Crud/update'
import EditModal from './components/Library/Modal'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <main className="py-3">
            <Container fluid>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products}/>
              <Route exact path="/product/:id" component={Product}/>
              <Route exact path="/table" component={Users}/>
              <Route exact path="/datatable" component={DATATable}/>
              <Route exact path="/aboutus" component={TeamPage}/>
              <Route exact path="/dropzone" component={MyDropzone}/>
              <Route exact path="/upload" component={Upload}/>
              <Route exact path="/createuser" component={CreateUser}/>
              <Route exact path="/carousel" component={BootstrapCarousel}/>
              <Route exact path="/sidebar" component={Sidebar}/>
              <Route exact path="/create" component={Create}/>
              <Route exact path="/read" component={Read}/>
              <Route exact path="/update" component={Update}/>
              <Route exact path="/editmodal" component={EditModal}/>
            </Container>  
          </main>  
        <Footer />  
      </Router>  
    </div>
  );
}

export default App;
